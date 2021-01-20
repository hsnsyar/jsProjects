function Translate(word,language){
    this.apikey="trns1.1.20180930T080756Z.753c49142579b043.b2798189b8760e7b357c9d23a873ef0a54be481";
    this.word=word;
    this.language=language;

    // XHR objesı olusturma

    this.xhr=new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback){
    // ajax işlemleri
    const endpoint =`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`

    this.xhr.open("GET",endpoint,true);

    this.xhr.onload= () => {
        if(this.xhr.status === 200){
            const json=JSON.parse(this.xhr.responseText);
            const text=json.text[0];
            // console.log(JSON.parse(this.xhr.responseText).text[0]);
            callback(null,text);
        }
        else{
            callback("Bir hata oluştu",null);
        }
    }
    this.xhr.send();
}
Translate.prototype.changeParameters = function(newWord,newLanguage){
    this.word=newWord;
    this.language=newLanguage;
}