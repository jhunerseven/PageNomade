<?php
$api_key = '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';  // Reemplaza con tu API Key de OpenAI
$url = 'https://api.openai.com/v1/completions';

// Datos de la solicitud a la API
$data = [
    'model' => 'gpt-4',  // O puedes usar 'gpt-3.5-turbo' o cualquier otro modelo
    'prompt' => 'Recomiéndame un plato del menú',  // El prompt que deseas enviar
    'max_tokens' => 100,  // Limitar el tamaño de la respuesta
    'temperature' => 0.7,  // Determina la aleatoriedad de la respuesta
];

// Iniciar cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $api_key,
]);

// Obtener la respuesta
$response = curl_exec($ch);

// Cerrar cURL
curl_close($ch);

// Decodificar la respuesta JSON
$responseData = json_decode($response, true);

// Mostrar la respuesta (puedes personalizarla para integrarla en tu sitio web)
echo $responseData['choices'][0]['text'];  // Aquí es donde se obtiene la respuesta de GPT-4
?>
