class FormBuilder {
    constructor() {
        this.fields = [];
    }
    
    addField(field) {
        this.fields.push(field);
    }
    
    addFields(fieldsArray) {
        this.fields = this.fields.concat(fieldsArray);
    }
    
    buildForm(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        let formHTML = '<form id="dynamicForm">';
        
        this.fields.forEach(field => {
            formHTML += `<div class="form-group">`;
            formHTML += `<label for="${field.name}">${field.label}</label>`;
            
            switch (field.type) {
                case 'text':
                    formHTML += `<input type="text" id="${field.name}" name="${field.name}" />`;
                    break;
                case 'email':
                    formHTML += `<input type="email" id="${field.name}" name="${field.name}" />`;
                    break;
                case 'password':
                    formHTML += `<input type="password" id="${field.name}" name="${field.name}" />`;
                    break;
                case 'number':
                    formHTML += `<input type="number" id="${field.name}" name="${field.name}" />`;
                    break;
                case 'select':
                    formHTML += `<select id="${field.name}" name="${field.name}">`;
                    if (field.options) {
                        field.options.forEach(option => {
                            formHTML += `<option value="${option.value}">${option.text}</option>`;
                        });
                    }
                    formHTML += `</select>`;
                    break;
                case 'textarea':
                    formHTML += `<textarea id="${field.name}" name="${field.name}"></textarea>`;
                    break;
                default:
                    formHTML += `<input type="text" id="${field.name}" name="${field.name}" />`;
            }
            
            formHTML += `</div>`;
        });
        
        formHTML += `<button type="submit">Submit</button>`;
        formHTML += `</form>`;
        
        container.innerHTML = formHTML;
        
        // Add event listener for form submission
        const form = document.getElementById('dynamicForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = this.getFormData();
                console.log('Form Data:', formData);
            });
        }
    }
    
    getFormData() {
        const form = document.getElementById('dynamicForm');
        if (!form) return {};
        
        const formData = {};
        const elements = form.elements;
        
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            if (element.name && element.type !== 'submit') {
                formData[element.name] = element.value;
            }
        }
        
        return formData;
    }
}

// Example usage (would work in a browser environment)
const formBuilder = new FormBuilder();

const fields = [
    { type: 'text', name: 'username', label: 'Username' },
    { type: 'email', name: 'email', label: 'Email' },
    { type: 'password', name: 'password', label: 'Password' },
    { type: 'select', name: 'country', label: 'Country', options: [
        { value: 'us', text: 'United States' },
        { value: 'ca', text: 'Canada' },
        { value: 'uk', text: 'United Kingdom' }
    ]}
];

formBuilder.addFields(fields);

// In a real browser environment, you would call:
// formBuilder.buildForm('formContainer');

// For demonstration, let's show what the form data structure would look like
console.log("Form Builder initialized with fields:");
console.log(fields);