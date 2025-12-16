document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const loader = submitBtn.querySelector('.loader');
    const feedback = document.getElementById('formFeedback');

    // Novos elementos de Sucesso
    const successMessage = document.getElementById('successMessage');
    const newBookingBtn = document.getElementById('newBookingBtn');
    const successName = document.getElementById('successName');
    const successService = document.getElementById('successService');
    const successDate = document.getElementById('successDate');

    const fields = {
        name: document.getElementById('name'),
        phone: document.getElementById('phone'),
        service: document.getElementById('service'),
        date: document.getElementById('date')
    };

    // Função de Validação Simplificada
    function validateField(field) {
        const value = field.value.trim();
        const errorSpan = document.getElementById(`${field.id}Error`);
        let isValid = true;
        let errorMessage = '';

        // Reset
        field.classList.remove('error');
        errorSpan.textContent = '';

        if (!value) {
            isValid = false;
            errorMessage = 'Este campo é obrigatório.';
        } else {
            // Validações específicas
            switch (field.id) {
                case 'name':
                    if (value.length < 3) {
                        isValid = false;
                        errorMessage = 'O nome deve ter pelo menos 3 caracteres.';
                    }
                    break;
                case 'phone':
                    // Regex simples para verificar se tem números suficientes
                    // Aceita formatos (XX) XXXXX-XXXX ou apenas números
                    const phoneDigits = value.replace(/\D/g, '');
                    if (phoneDigits.length < 10) {
                        isValid = false;
                        errorMessage = 'Digite um telefone válido (mínimo 10 dígitos).';
                    }
                    break;
                case 'date':
                    const selectedDate = new Date(value);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0); // Zerar horas para comparar apenas datas

                    if (selectedDate < today) {
                        isValid = false;
                        errorMessage = 'A data não pode ser no passado.';
                    }
                    break;
            }
        }

        if (!isValid) {
            field.classList.add('error');
            errorSpan.textContent = errorMessage;
        }

        return isValid;
    }

    // Adiciona listener de 'input' para validação em tempo real (opcional, mas boa prática UX)
    Object.values(fields).forEach(field => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
            if (field.classList.contains('error')) {
                validateField(field);
            }
        });
    });

    // Simulação de API / Banco de Dados
    function mockApiCall(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simula 90% de sucesso e 10% de falha aleatória
                const isSuccess = Math.random() > 0.1;

                if (isSuccess) {
                    console.group('🔌 [Simulação de Integração] Envio para API Externa');
                    console.log('Endpoint: POST https://api.barbeariavintagesystem.com.br/v1/bookings');
                    console.log('Payload:', JSON.stringify(data, null, 2));
                    console.log('Status: 200 OK');
                    console.log('Response-Time: 1845ms');
                    console.groupEnd();

                    resolve({ status: 200, message: 'Agendamento confirmado com sucesso!' });
                } else {
                    console.error('🔌 [Simulação de Integração] Falha de Conexão (500)');
                    reject({ status: 500, message: 'Erro no servidor. Tente novamente.' });
                }
            }, 2000); // Delay de 2 segundos para simular rede
        });
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // 1. Validação de todos os campos
        let isFormValid = true;
        Object.values(fields).forEach(field => {
            if (!validateField(field)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            feedback.textContent = 'Por favor, corrija os erros acima.';
            feedback.className = 'form-feedback error'; // Aplica classe de erro
            return;
        }

        // 2. Preparação para envio
        submitBtn.disabled = true;
        btnText.textContent = 'Enviando...';
        loader.style.display = 'inline-block';
        feedback.className = 'form-feedback';
        feedback.style.display = 'none';

        const formData = {
            name: fields.name.value,
            phone: fields.phone.value,
            service: fields.service.value,
            date: fields.date.value,
            timestamp: new Date().toISOString()
        };

        // 3. Chamada à API Simulada
        try {
            const response = await mockApiCall(formData);

            // Sucesso!
            form.style.display = 'none'; // Esconde o formulário
            successMessage.style.display = 'block'; // Mostra a tela de sucesso

            // Preenche os dados no resumo
            successName.textContent = formData.name.split(' ')[0]; // Só o primeiro nome
            successService.textContent = formData.service;
            successDate.textContent = new Date(formData.date).toLocaleDateString();

            form.reset();

            // Remove estados de erro/sucesso dos campos se houver
            Object.values(fields).forEach(f => f.classList.remove('error'));

        } catch (error) {
            feedback.textContent = error.message;
            feedback.className = 'form-feedback error';
            feedback.style.display = 'block';
        } finally {
            // 4. Finalização
            submitBtn.disabled = false;
            btnText.textContent = 'Confirmar Agendamento';
            loader.style.display = 'none';
        }
    });

    // Botão "Novo Agendamento"
    newBookingBtn.addEventListener('click', () => {
        successMessage.style.display = 'none';
        form.style.display = 'block';
        feedback.style.display = 'none'; // Limpa feedbacks antigos
    });
});
