const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Opções de configuração do Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'BBMS',
            version: 'rolling',
            description: 'Blood Bank Management System (BBMS) RESTful api',
        },
    },
    apis: ['./routes/*.js'], // Caminho para os arquivos de rotas
};

// Inicialização do swagger-jsdoc
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Usar Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
