if ($('a#flash_list').length == 0){
    $('body').append(
        $('<a>').attr('id', 'flash_list').text('Download list')
    );
}

var rows = $('#tn15content table:nth-child(3) tbody tr');
if (rows.length != 0) {
    var episodes = [];
    for(i=1;i<rows.length;++i){
        var order = $(rows[i]).children('td:first-child').text().trim();
        var title = $(rows[i]).find('td:nth-child(2) a').text().trim();
        var rating = $(rows[i]).children('td:nth-child(3)').text().trim();

        episodes.push({
            season: order.slice(0, order.indexOf('.')),
            episode: order.slice(order.indexOf('.')+1, order.length),
            title: title,
            rating: rating
        });
    }

    console.log(episodes);
    var oMyBlob = new Blob([JSON.stringify(episodes)], {type : 'application/json'}); // the blob
    var obj = URL.createObjectURL(oMyBlob);
    
    $('a#flash_list').attr('href', obj).attr('download', 'list.json');
}