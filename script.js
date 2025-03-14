async function verileriGetir() {
    const sehirler = await fetch("./json/sehirler.json").then(res => res.json());
    const ilceler = await fetch("./json/ilceler.json").then(res => res.json());
    const mahalle1 = await fetch("./json/mahalleler-1.json").then(res => res.json());
    const mahalle2 = await fetch("./json/mahalleler-2.json").then(res => res.json());
    const mahalle3 = await fetch("./json/mahalleler-3.json").then(res => res.json());
    const mahalleler = [...mahalle1, ...mahalle2, ...mahalle3];

    // İl Select doldur
    $('#il').select2({ placeholder: 'İl Seçiniz' });
    sehirler.forEach(il => {
        $('#il').append(new Option(il.sehir_adi, il.sehir_id));
    });

    // İl seçimi yapıldığında ilçeleri yükle
    $('#il').on('change', function () {
        const secilenIlId = $(this).val();
        const ilgiliIlceler = ilceler.filter(ilce => ilce.sehir_id === secilenIlId);

        $('#ilce').empty().append(new Option('', ''));
        $('#mahalle').empty().append(new Option('', ''));

        ilgiliIlceler.forEach(ilce => {
            $('#ilce').append(new Option(ilce.ilce_adi, ilce.ilce_id));
        });

        $('#ilce').select2({ placeholder: 'İlçe Seçiniz' });
        $('#mahalle').select2({ placeholder: 'Mahalle Seçiniz' });
    });

    // İlçe seçimi yapıldığında mahalleleri yükle
    $('#ilce').on('change', function () {
        const secilenIlceId = $(this).val();
        const ilgiliMahalleler = mahalleler.filter(m => m.ilce_id === secilenIlceId);

        $('#mahalle').empty().append(new Option('', ''));

        ilgiliMahalleler.forEach(mahalle => {
            $('#mahalle').append(new Option(mahalle.mahalle_adi, mahalle.mahalle_id));
        });

        $('#mahalle').select2({ placeholder: 'Mahalle Seçiniz' });
    });

    // Başlangıçta select2 öğelerini aktif hale getir
    $('#il').empty().append(new Option('', ''));
    sehirler.forEach(il => {
        $('#il').append(new Option(il.sehir_adi, il.sehir_id));
    });

    $('#il').select2({ placeholder: 'İl Seçiniz' });
    $('#ilce').select2({ placeholder: 'İlçe Seçiniz' });
    $('#mahalle').select2({ placeholder: 'Mahalle Seçiniz' });
}



async function verileriDuzenle(seciliIl, seciliIlce, seciliMahalle) {
    const sehirler = await fetch('./json/sehirler.json').then(res => res.json());
    const ilceler = await fetch('./json/ilceler.json').then(res => res.json());
    const mahalle1 = await fetch('./json/mahalleler-1.json').then(res => res.json());
    const mahalle2 = await fetch('./json/mahalleler-2.json').then(res => res.json());
    const mahalle3 = await fetch('./json/mahalleler-3.json').then(res => res.json());
    const mahalleler = [...mahalle1, ...mahalle2, ...mahalle3];

    $('#il, #ilce, #mahalle').select2({ placeholder: 'Seçiniz' });

    // İl değişimi
    $('#il').on('change', function () {
        const secilenIlId = $(this).val();
        const ilgiliIlceler = ilceler.filter(ilce => ilce.sehir_id === secilenIlId);

        $('#ilce').empty().append(new Option('', ''));
        ilgiliIlceler.forEach(ilce => {
            $('#ilce').append(new Option(ilce.ilce_adi, ilce.ilce_id));
        });

        if(secilenIlId === seciliIl) {
            $('#ilce').val(seciliIlce).trigger('change');
        } else {
            $('#ilce').trigger('change');
        }
    });

    // İlçe değişimi
    $('#ilce').on('change', function () {
        const secilenIlceId = $(this).val();
        const ilgiliMahalleler = mahalleler.filter(m => m.ilce_id === secilenIlceId);

        $('#mahalle').empty().append(new Option('', ''));
        ilgiliMahalleler.forEach(mahalle => {
            $('#mahalle').append(new Option(mahalle.mahalle_adi, mahalle.mahalle_id));
        });

        if(secilenIlceId === seciliIlce) {
            $('#mahalle').val(seciliMahalle).trigger('change');
        }
    });

    // İlleri doldur ve seçimi yap
    $('#il').empty().append(new Option('', ''));
    sehirler.forEach(il => {
        $('#il').append(new Option(il.sehir_adi, il.sehir_id));
    });

    // Seçili il'i ayarla ve tetikle
    $('#il').val(seciliIl).trigger('change');
}


function islem(formname) {
    var form = $("#" + formname);
    if (form.length === 0) {
        console.error("Form bulunamadı: " + formname);
        return;
    }
    var formData = new FormData(form[0]);

    // Select2 elementlerini tespit edip isim ve id değerlerini alalım:
    form.find('select.select2').each(function(){
        let isim = $(this).attr('name');
        let seciliId = $(this).val();
        let seciliText = $(this).find('option:selected').text();

        // text ve id ayrı ayrı gönderilir
        formData.set(isim, seciliText);
        formData.set(isim + "_id", seciliId);
    });

    $.ajax({
        type: "POST",
        url: "islem.php",
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        cache: false,
        data: formData,
        success: function (cevap) {
                $(".cevap").html(cevap);
        }
    });
}
