<?php

require_once __DIR__ . '/../vendor/autoload.php';
(new Dotenv\Dotenv(__DIR__ . '/../'))->load();

$data = json_decode(file_get_contents('php://input'), true);

$from = new SendGrid\Email($data['name'], $data['email']);
$subject = getenv('MAIL_SUBJECT');
$to = new SendGrid\Email(getenv('MAIL_TO_NAME'), getenv('MAIL_TO_EMAIL'));
$content = new SendGrid\Content('text/plain', $data['message']);
$mail = new SendGrid\Mail($from, $subject, $to, $content);
$sg = new \SendGrid(getenv('SENDGRID_API_KEY'));
$response = $sg->client->mail()->send()->post($mail);

http_response_code($response->statusCode());
