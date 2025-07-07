// Harf Bulma Programı

let metin1 = "“Zafer, ‘Zafer benimdir’ diyebilenindir. Başarı ise, ‘Başaracağım’ diye başlayarak sonunda ‘Başardım’ diyebilenindir.”"
// let aranacakHarf = prompt("Bulmak istediğiniz harfi giriniz: ");
// let bulunanHarf = harfBulucu(metin1);
// alert("Metindeki >" + aranacakHarf.toLocaleLowerCase() + "< harfi " + bulunanHarf + " kez geçiyor.");
harfBulucu("e");
harfBulucu("a");
harfBulucu("s");
harfBulucu("g");
harfBulucu("b");

function harfBulucu(metin) {
    let toplamSayi = 0;
    for (let i = 0; i < metin1.length; i++) {
        if (metin1.charAt(i).toLowerCase() === metin.toLowerCase()) {
            toplamSayi += 1;
        }
    }
    // return toplamSayi;
    console.log("harf sayısı:" + toplamSayi);
}
