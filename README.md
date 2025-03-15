# Turkiye İl İlçe Mahalle Seçimi (Select2 + JSON + PHP)

Bu proje, Türkiye'deki iller, ilçeler ve mahalleleri Select2 kütüphanesi kullanarak dinamik olarak listeleyen bir form örneğidir. Veriler JSON dosyaları üzerinden yüklenerek PHP aracılığıyla işlenir.

## Özellikler
- Türkiye'deki iller, ilçeler ve mahallelerin dinamik seçimi.
- Select2 kullanımı ile gelişmiş kullanıcı deneyimi.
- JSON üzerinden veri yükleme.
- PHP ile veri işleme ve sunucuya gönderme.

## Kullanılan Teknolojiler
- HTML
- JavaScript
- JQuery
- Select2
- JSON
- PHP

## Kurulum ve Kullanım
- Projeyi klonlayın veya indirin:
```
git clone https://github.com/kullanici-adiniz/Turkiye-Il-Ilce-Mahalle-Secimi-Select2-Json-PHP.git
```
- Dosyaları web sunucunuzun ilgili dizinine yerleştirin.

### ⚠️ Önemli
`index.php` dosyasında aşağıdaki satırların birini aktif etmek için yorum satırlarını (//) kaldırmayı unutmayın:

```html
<script>
   // verileriDuzenle("1", "1219", "255"); //Seçili (il-ilçe-mahalle) verilerle açılır
   // verileriGetir(); //Seçimsiz açılış
</script>
```
Örneğin seçili verilerle başlatmak için:
```js
verileriDuzenle("1", "1219", "255");
```
şeklinde yorum satırını kaldırmalısınız.

---

# Turkey City-District-Neighborhood Selection (Select2 + JSON + PHP)

This project is a dynamic form example listing Turkish cities, districts, and neighborhoods using the Select2 library. Data is loaded through JSON files and processed with PHP.

## Features
- Dynamic selection of Turkish cities, districts, and neighborhoods.
- Data loading from JSON files.
- Enhanced select boxes using Select2.
- PHP processing of submitted data.

## Technologies Used
- HTML
- JavaScript
- JQuery
- Select2
- JSON
- PHP

## Installation & Usage
- Clone or download the repository:
```
git clone https://github.com/your-username/Turkiye-Il-Ilce-Mahalle-Secimi-Select2-Json-PHP.git
```
- Place the files on your server.

**IMPORTANT:**
`index.php` dont forget to uncomment one of these script functions to initialize the application:
```html
<script>
  // verileriDuzenle("1", "1219", "255"); //Opens with preselected city, district, neighborhood
  // verileriGetir(); //Opens without any preselection
</script>
```
Example usage with predefined selections:
```js
verileriDuzenle("1", "1219", "255");
```

## Technologies
- HTML
- JavaScript
- JQuery
- Select2
- JSON
- PHP

## License
This project is open-source.

