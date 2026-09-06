export type Style = { id:string; titleAr:string; titleEn:string; accent:string; prompt:string; enabled:boolean };
export const styles: Style[] = [
 {id:"najdi",titleAr:"الطابع النجدي",titleEn:"Najdi",accent:"#b79750",enabled:true,prompt:"Authentic Najdi setting and traditional clothing, warm natural light."},
 {id:"hijazi",titleAr:"الطابع الحجازي",titleEn:"Hijazi",accent:"#0d563e",enabled:true,prompt:"Elegant Hijazi setting and clothing, warm natural light."},
 {id:"southern",titleAr:"الطابع الجنوبي",titleEn:"Southern",accent:"#68736e",enabled:true,prompt:"Saudi southern heritage styling, elegant and authentic."},
 {id:"formal",titleAr:"السعودي الرسمي",titleEn:"Saudi Formal",accent:"#063d2b",enabled:true,prompt:"Contemporary Saudi formal portrait with refined lighting."}
];
