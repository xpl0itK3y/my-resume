import React from 'react';

// Создайте этот файл: src/components/TestComponent.jsx
// Потом импортируйте в App.jsx

const TestComponent = ({ data }) => {
    console.log('=== ДИАГНОСТИКА ===');
    console.log('1. Компонент загружен');
    console.log('2. Полученные данные:', data);
    console.log('3. Тип данных:', typeof data);
    console.log('4. Данные undefined?', data === undefined);
    console.log('5. Данные null?', data === null);
    console.log('===================');

    if (!data) {
        return (
            <div style={{
                background: 'red',
                color: 'white',
                padding: '2rem',
                margin: '2rem',
                borderRadius: '10px'
            }}>
                ❌ ОШИБКА: Данные не переданы!
            </div>
        );
    }

    return (
        <div style={{
            background: 'green',
            color: 'white',
            padding: '2rem',
            margin: '2rem',
            borderRadius: '10px'
        }}>
            ✅ УСПЕХ: Данные получены!
        <pre style={{ marginTop: '1rem', background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '5px' }}>
            {JSON.stringify(data, null, 2)}
        </pre>
        </div>
    );
};

export default TestComponent;