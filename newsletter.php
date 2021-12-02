<?php
if(isset($_POST['email'])){
$handle = fopen("newsletter.txt", "a");
foreach($_POST as $variable => $value) {
for($i = 0; $i<(10 - strlen($variable)); $i++)
fwrite($handle);
fwrite($handle, $value);
fwrite($handle, "\r\n");
}
}

$lines = file('newsletter.txt');
$lines = array_unique($lines);
file_put_contents('newsletter.txt', implode($lines));

header("Location: ../flm.html#contactForm");
?>