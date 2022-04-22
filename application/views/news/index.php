<script src = "assets/js/main.js"></script>
<link href="assets/css/news.css" rel="stylesheet">

<link href="assets/css/bootstrap3.3.7.css" rel="stylesheet">

<h2><?=$title;?></h2>
<!-- not sure what to do here -->
<?php foreach ($news as $news_item): ?>

        <h3><?= $news_item['title']; ?></h3>
        <?php if($news_item['importance'] == 1)
                
                echo "<h3 style='background-color:red; font-weight:bold;'>"              
         ?>
        <div class="main">
                <?= $news_item['text']; ?>
        </div>
        <p><a href="<?= '/news/'.$news_item['slug'] ?>">View article</a></p>

<?php endforeach; ?>