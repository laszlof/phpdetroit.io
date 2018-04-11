<?php

require_once __DIR__ . '/../vendor/autoload.php';
(new Dotenv\Dotenv(__DIR__ . '/../'))->load();

$from = new SendGrid\Email($_POST['name'], $_POST['email']);
$subject = getenv('MAIL_SUBJECT');
$to = new SendGrid\Email(getenv('MAIL_TO_NAME'), getenv('MAIL_TO_EMAIL'));
$content = new SendGrid\Content('text/plain', $_POST['message']);
$mail = new SendGrid\Mail($from, $subject, $to, $content);
$sg = new \SendGrid(getenv('SENDGRID_API_KEY'));
$response = $sg->client->mail()->send()->post($mail);

http_response_code($response->getStatusCode());
