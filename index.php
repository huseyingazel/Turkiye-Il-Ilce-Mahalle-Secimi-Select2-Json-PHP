<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>İl-İlçe-Mahalle Seçimi</title>
    <!-- Select2 CDN -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css"/>
</head>
<body>

 <form id="formadi" enctype="multipart/form-data" action="javascript:void(0);">
<select name="il" id="il" class="select2" style="width: 200px;"></select>
<select name="ilce" id="ilce" class="select2" style="width: 200px;"></select>
<select name="mahalle" id="mahalle" class="select2" style="width: 200px;"></select>
     <input type="text" value="deneme" name="inputad">
 </form>
<button onclick="islem('formadi',)" id="gonder">Gönder</button>
<div class="cevap"></div>

<!-- JQuery CDN -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<!-- Select2 CDN -->
<script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js"></script>
<!-- Özel Script -->
<script src="script.js"></script>
<script>
   //verileriDuzenle("1", "1219", "255"); //Belirli Verilerle açılması için İl id , İlçe id , Mahalle id girilir
  // verileriGetir(); //Seçimsiz açılış
</script>
</body>
</html>
