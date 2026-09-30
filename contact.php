<?php
/* =====================================================================
   contact.php — Réception du formulaire de contact L'Rénov IA Studio
   ---------------------------------------------------------------------
   Reçoit les données du formulaire (contact.html) et envoie un email
   récapitulatif à contact@lrenov-ia.studio, puis renvoie le visiteur
   vers contact.html avec un message de succès ou d'erreur.
   Hébergé sur le même domaine → autorisé par le CSP (form-action 'self').
   ===================================================================== */

// Destinataire (ta boîte)
$destinataire = "contact@lrenov-ia.studio";

// On n'accepte que les envois POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header("Location: contact.html");
    exit;
}

// --- Anti-spam : si le champ piège est rempli, c'est un robot → on ignore ---
if (!empty($_POST['_gotcha'])) {
    header("Location: contact.html?envoye=1"); // on fait comme si tout allait bien
    exit;
}

// --- Petite fonction de nettoyage (évite l'injection d'en-têtes) ---
function nettoie($v) {
    $v = trim((string)$v);
    $v = str_replace(array("\r", "\n", "%0a", "%0d"), ' ', $v); // anti header-injection
    return $v;
}

// --- Récupération des champs ---
$nom        = nettoie($_POST['nom']        ?? '');
$email      = nettoie($_POST['email']      ?? '');
$telephone  = nettoie($_POST['telephone']  ?? '');
$entreprise = nettoie($_POST['entreprise'] ?? '');
$secteur    = nettoie($_POST['secteur']    ?? '');
$message    = trim((string)($_POST['message'] ?? ''));

// --- Validation minimale ---
if ($nom === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $message === '') {
    header("Location: contact.html?erreur=1#formulaire");
    exit;
}

// --- Construction de l'email ---
$sujet = "Nouvelle demande de contact - " . $nom;

$corps  = "Nouvelle demande depuis le site lrenov-ia.studio\n";
$corps .= "----------------------------------------------\n\n";
$corps .= "Nom        : " . $nom . "\n";
$corps .= "Email      : " . $email . "\n";
$corps .= "Telephone  : " . ($telephone !== '' ? $telephone : '-') . "\n";
$corps .= "Entreprise : " . ($entreprise !== '' ? $entreprise : '-') . "\n";
$corps .= "Secteur    : " . ($secteur !== '' ? $secteur : '-') . "\n\n";
$corps .= "Message :\n" . $message . "\n\n";
$corps .= "----------------------------------------------\n";
$corps .= "Recu le " . date('d/m/Y a H:i') . "\n";

// --- En-têtes (From sur ton domaine = bonne delivrabilite ; Reply-To = le visiteur) ---
$entetes  = "From: L'Renov IA Studio <" . $destinataire . ">\r\n";
$entetes .= "Reply-To: " . $email . "\r\n";
$entetes .= "Content-Type: text/plain; charset=UTF-8\r\n";

// --- Envoi ---
if (mail($destinataire, $sujet, $corps, $entetes)) {
    header("Location: contact.html?envoye=1#formulaire");
} else {
    header("Location: contact.html?erreur=1#formulaire");
}
exit;
?>
