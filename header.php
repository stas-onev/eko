<?php
	if (!isset($page_title)) {
		$page_title = 'Page Title';
	}
?>

<!DOCTYPE html>
<html lang="he" dir="rtl"><!-- bloginfo('language') -->
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title><?= $page_title ?> - Eko</title>
	<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
	<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css">
	<link rel="stylesheet" href="css/main.css">
	<?php //wp_head(); ?>
</head>
<body>
	<div class="wrapper push">
		<div class="page">
			<header class="header">
				<div class="container">
					<div class="header-inner">
						<div class="header-block">
							<a href="index.php" class="logo-block">
								<img src="img/logo.png" alt="">
							</a>
						</div>
						<div class="header-block flex">
							<ul class="top-nav">
								<li><a href="#">הפח החכם</a></li>
								<li><a href="#">הקולקציה</a></li>
								<li><a href="#">הבוק</a></li>
								<li><a href="#">נקודות מכירה</a></li>
							</ul>
							<a href="#" class="sale-link">SALE<span>SALE</span>SALE</a>
						</div>
					</div>
				</div>
			</header>