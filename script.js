/* --- DATABASE PRINCIPALE ANALISI --- */
const skincareDB = {
    "breakout": {
        "umido": {
            ingredient: "Acido Salicilico (BHA) + Niacinamide",
            avoid: "Oli Minerali & Siliconi pesanti",
            products: "La Roche-Posay Effaclar Duo+, Paula’s Choice 2% BHA Liquid, The Ordinary Niacinamide 10%",
            prodImg: "img/IMG-01.jpg",
            natural: "Maschera Argilla Verde & Idrolato di Tea Tree",
            natImg: "img/IMG-02.jpg",
            explanation: "In un clima caldo e umido, la pelle affronta una doppia sfida: l'eccesso di sudore e l'aumento della produzione di sebo. Questa combinazione crea un film occlusivo sulla superficie cutanea che 'intrappola' i batteri all'interno dei pori, causando breakout infiammatori. L'Acido Salicilico è la chiave per navigare in questa confusione perché è l'unico acido in grado di sciogliersi nei grassi, penetrando letteralmente dentro il poro per liberarlo dall'interno. La Niacinamide completa l'azione riducendo la visibilità dei pori e controllando che la produzione di olio non vada fuori giri. Evita oli pesanti che agirebbero come un 'tappo' ulteriore in questo microclima."
        },
        "secco": {
            ingredient: "Acido Azelaico + Bakuchiol",
            avoid: "Alcol Denaturato & Scrub fisici a grana grossa",
            products: "The Ordinary Azelaic Acid, CeraVe Blemish Control, Medik8 Bakuchiol Peptides",
            prodImg: "img/IMG-03.jpg",
            natural: "Impacco locale con Miele di Manuka e Aloe",
            natImg: "img/IMG-04.jpg",
            explanation: "Navigare tra i breakout in un clima secco è complesso perché i prodotti anti-acne tradizionali sono spesso troppo aggressivi, finendo per seccare la pelle e peggiorare l'infiammazione (la cosiddetta 'acne da barriera compromessa'). Quando l'aria è secca, la pelle perde acqua e si screpola; queste micro-lesioni diventano la porta d'ingresso per i batteri. La soluzione non è 'asciugare' ma trattare delicatamente. L'Acido Azelaico è un ingrediente formidabile: uccide i batteri responsabili dei breakout ma ha anche proprietà lenitive che calmano il rossore tipico del clima freddo. È importante non usare scrub meccanici, che creerebbero solo ulteriori irritazioni su una pelle già fragile."
        }
    },
    "rossore": {
        "umido": {
            ingredient: "Centella Asiatica + Polifenoli del Thè",
            avoid: "Profumi sintetici & Oli Essenziali puri",
            products: "Dr. Jart+ Cicapair Serum, Avène Antirougeurs, Erborian CC Red Correct",
            prodImg: "img/IMG-05.jpg",
            natural: "Impacchi freddi con infuso di Camomilla e Calendula",
            natImg: "img/IMG-06.jpg",
            explanation: "Il calore e l'umidità causano una vasodilatazione naturale: i piccoli vasi sanguigni sotto la pelle si espandono per disperdere il calore, rendendo il viso visibilmente più rosso e congestionato. In questo scenario, la pelle è iper-reattiva. La Centella Asiatica è un ingrediente 'eroe' della tradizione orientale che la scienza moderna ha confermato essere un potente vasocostrittore e riparatore della barriera. Aiuta a 'chiudere' i vasi dilatati e a dare sollievo immediato. La regola d'oro qui è la semplicità: meno ingredienti usi, meno possibilità hai di irritare una pelle già sotto stress termico. Prediligi prodotti senza fragranze, che con il calore possono diventare fotosensibilizzanti."
        },
        "secco": {
            ingredient: "Ceramidi + Pantenolo (Pro-Vitamina B5)",
            avoid: "Mentolo, Canfora & Detergenti schiumogeni",
            products: "Dr. Jart+ Ceramidin Cream, La Roche-Posay Cicaplast Baume, Skinceuticals Redness Neutralizer",
            prodImg: "img/IMG-07.jpg",
            natural: "Olio di Calendula bio puro o Olio di Mandorle",
            natImg: "img/IMG-08.jpg",
            explanation: "Il freddo e il vento agiscono come carta vetrata sulla pelle sensibile. In un clima secco, la barriera cutanea (composta da grassi e lipidi) si 'incrina', permettendo all'idratazione interna di evaporare e agli agenti esterni di penetrare, causando bruciore e rossore diffuso. Immagina la tua pelle come un muro di mattoni: le Ceramidi sono la malta che tiene uniti i mattoni. Senza di esse, il muro crolla. Inserire Ceramidi e Pantenolo nella routine serve a 'stuccare' queste micro-fessure, bloccando l'acqua all'interno e proteggendo i nervi cutanei dagli sbalzi termici. Evita assolutamente prodotti rinfrescanti come il mentolo, che darebbero una falsa sensazione di sollievo ma finirebbero per irritare ulteriormente la barriera."
        }
    },
    "opacita": {
        "umido": {
            ingredient: "Vitamina C (Sodio Ascorbil Fosfato) + Enzimi",
            avoid: "Creme notte ultra-ricche & Paraffina",
            products: "Vichy Liftactiv Vit C, Sunday Riley Good Genes, Olehenriksen Truth Serum",
            prodImg: "img/IMG-09.jpg",
            natural: "Maschera illuminante alla polpa di Papaia fresca",
            natImg: "img/IMG-10.jpg",
            explanation: "Il grigiore cutaneo in climi umidi è spesso causato da un mix di cellule morte che non riescono a staccarsi e particelle di inquinamento atmosferico (smog) che si attaccano al sebo superficiale. Questa 'patina' impedisce alla luce di riflettersi, rendendo il viso spento. La Vitamina C agisce come un riflettore luminoso e un potente antiossidante che neutralizza i danni da smog. In questo clima, però, è meglio evitare la Vitamina C pura (Acido Ascorbico) se troppo oleosa, preferendo derivati stabili che non appesantiscano. Gli enzimi della frutta (come quelli della papaia) sono ottimi perché 'mangiano' le cellule morte senza bisogno di strofinare, rivelando subito una pelle più fresca e luminosa."
        },
        "secco": {
            ingredient: "Acido Ialuronico Multipeso + Vitamina E",
            avoid: "Maschere all'Argilla & Detergenti in polvere",
            products: "Hada Labo Tokyo Hydrator, Estée Lauder Advanced Night Repair, Kiehl's Ultra Facial Cream",
            prodImg:  "img/IMG-11.jpg",
            natural: "Maschera idratante Avocado, Miele e Yogurt intero",
            natImg: "img/IMG-12.jpg",
            explanation: "Quando l'aria è secca, la pelle diventa opaca perché perde la sua naturale 'riserva' d'acqua. Una pelle disidratata appare ruvida al tatto e questa irregolarità diffonde la luce in modo disordinato invece di rifletterla. La confusione qui sta nel pensare di aver bisogno di 'olio', quando spesso serve solo 'acqua'. L'Acido Ialuronico a diversi pesi molecolari è la soluzione: le molecole grandi restano in superficie per levigare, quelle piccole scendono in profondità per rimpolpare. La Vitamina E serve a sigillare questa idratazione. Evita le maschere all'argilla che assorbono l'umidità residua, lasciando la pelle ancora più spenta e 'segnata' dalla disidratazione."
        }
    },
    "invecchiamento": {
        "umido": {
            ingredient: "Peptidi + Retinolo in Microcapsule",
            avoid: "Burri occlusivi (Karité in alte dosi) & Oli pesanti",
            products: "Medik8 Crystal Retinal, Drunk Elephant Protini, Murad Retinol Youth Renewal",
            prodImg:  "img/IMG-13.jpg",
            natural: "Massaggio facciale drenante con rullo di Giada freddo",
            natImg:  "img/IMG-14.jpg",
            explanation: "L'invecchiamento cutaneo accelerato dall'umidità e dal calore si manifesta spesso con la perdita di elasticità (cedimento) e pori visibilmente più larghi. Il calore degrada il collagene più velocemente. I Peptidi sono messaggeri cellulari che 'ordinano' alla pelle di produrre nuova struttura, mentre il Retinolo accelera il ricambio delle cellule. In un clima umido, però, il retinolo può causare irritazione se la pelle suda; per questo usiamo la versione in microcapsule, che rilascia l'attivo lentamente durante la notte. È un errore usare creme notte troppo grasse in questo clima: rischi di svegliarti con il viso gonfio perché i pori non hanno respirato correttamente."
        },
        "secco": {
            ingredient: "Retinolo in Squalano + Fitosteroli",
            avoid: "Esposizione solare senza protezione & Saponi alcalini",
            products: "The Ordinary Retinol in Squalane, SkinCeuticals Triple Lipid, Elizabeth Arden Retinol Capsules",
            prodImg:  "img/IMG-15.jpg",
            natural: "Olio di Rosa Mosqueta (Retinolo naturale) e Olio di Argan",
            natImg:  "img/IMG-16.jpg",
            explanation: "Le rughe sottili e la perdita di densità sono accentuate drasticamente dal clima secco, che 'svuota' otticamente i tessuti. Il Retinolo è l'unico ingrediente con decenni di prove scientifiche sulla sua capacità di invertire i segni del tempo, ma nel clima secco può essere molto irritante. La soluzione intelligente è veicolarlo nello Squalano, un olio che imita il sebo umano e previene la desquamazione. I Fitosteroli aiutano a mantenere la pelle densa e compatta. Il più grande errore che puoi commettere è trascurare la protezione solare (SPF): i raggi UV passano anche attraverso il freddo e il vento, distruggendo le fibre elastiche che il retinolo sta cercando di ricostruire."
        }
    }
};

/* --- FUNZIONE ANALISI --- */
function analyzeSkin() {
    const loader = document.getElementById('loader');
    const results = document.getElementById('results');
    const content = document.getElementById('routineContent');

    const skin = document.getElementById('skinType').value;
    const concern = document.getElementById('concern').value;
    const climate = document.getElementById('climate').value;

    loader.style.display = 'block';
    results.style.display = 'none';

    setTimeout(() => {
        const data = skincareDB[concern][climate];
        
        let textureAdvice = "";
        if (skin === "grassa") {
            textureAdvice = "Data la tua pelle grassa, l'obiettivo è idratare senza appesantire. Prediligi texture in 'Water-Gel' o sieri acquosi. Evita oli minerali che creerebbero un film lucido.";
        } else if (skin === "secca") {
            textureAdvice = "Per la tua pelle secca, la texture deve essere 'avvolgente'. Cerca creme con una fase grassa importante per 'stoppare' l'evaporazione dell'acqua.";
        } else {
            textureAdvice = "La pelle mista richiede equilibrio: sieri leggeri ovunque, ma creme più ricche solo sulle guance. Evita prodotti troppo sgrassanti sulla zona T.";
        }

        content.innerHTML = `
            <div class="badge-container">
                <span class="tag tag-key">Duo Attivo: ${data.ingredient}</span>
                <span class="tag tag-avoid">Blacklist: ${data.avoid}</span>
            </div>
            
            <div class="analysis-section">
                <h3>Analisi Professionale del Profilo</h3>
                <p>${data.explanation}</p>
                <div style="background: #fdfaf6; padding: 20px; border-radius: 12px; border-left: 5px solid #94a684; margin-top: 25px;">
                    <p style="margin:0; font-size: 1.1rem; color: #555;"><strong> Focus sulla Texture:</strong> ${textureAdvice}</p>
                </div>
            </div>

            <div class="product-grid">
                <div class="product-card">
                    <img src="${data.prodImg}" alt="Prodotto" class="res-img">
                    <h4>Selezione Dermocosmetica</h4>
                    <p>${data.products}</p>
                </div>
                <div class="product-card">
                    <img src="${data.natImg}" alt="Rimedio Naturale" class="res-img">
                    <h4>Rimedio Naturale Alternativo</h4>
                    <p>${data.natural}</p>
                </div>
            </div>
            <p class="footer-info">Glow-Algorithm v2.5 | Digital Skincare Expert</p>
        `;

        loader.style.display = 'none';
        results.style.display = 'block';
    }, 1200);
}

/* --- FUNZIONI SOS --- */
const sosDB = {
    "brufolo": {
        do: "Applica un cubetto di ghiaccio avvolto in un fazzoletto per 2 minuti. Usa un patch idrocolloide se è 'aperto'.",
        dont: "NON schiacciarlo. Spingeresti l'infezione più in profondità garantendo una cicatrice duratura."
    },
    "irritazione": {
        do: "Sciacqua il viso con acqua fredda. Sospendi ogni attivo (acidi, retinolo) per 72 ore. Usa solo acqua termale.",
        dont: "NON strofinare il viso e non applicare trucco pesante: la pelle ha bisogno di respirare."
    },
    "secchezza": {
        do: "Applica uno strato generoso di crema base senza profumo sulla pelle ancora umida. Usa un umidificatore.",
        dont: "NON fare docce troppo calde e non usare detergenti schiumogeni che rimuovono gli oli naturali."
    }
};

function toggleSOS() {
    const modal = document.getElementById('sosModal');
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
    document.getElementById('sosResult').innerHTML = "";
}

function getSOS(type) {
    const data = sosDB[type];
    const resultDiv = document.getElementById('sosResult');
    resultDiv.innerHTML = `
        <h4 style="color: #d62828; text-transform: uppercase;">Protocollo ${type}</h4>
        <p>✅ <strong>COSA FARE:</strong> ${data.do}</p>
        <p>❌ <strong>COSA NON FARE:</strong> ${data.dont}</p>
    `;
}

/* --- FUNZIONI CHATBOT GLOWY (Potenziato v3.0) --- */
function toggleChat() {
    const chat = document.getElementById('chat-window');
    chat.style.display = (chat.style.display === 'flex') ? 'none' : 'flex';
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const body = document.getElementById('chat-body');
    const text = input.value.trim();

    if (text === "") return;

    // Messaggio utente
    body.innerHTML += `<div class="user-msg">${text}</div>`;
    input.value = "";

    setTimeout(() => {
        let response = "Domanda interessante! La skincare è una scienza. Vuoi sapere come inserire questo elemento nella tua routine?";
        const msg = text.toLowerCase();

        // 1. LOGICA LIFESTYLE & ABITUDINI
        if (msg.includes("dormire") || msg.includes("sonno") || msg.includes("notte")) {
            response = "Il 'Beauty Sleep' esiste! Di notte la pelle si rigenera e produce collagene. Cerca di dormire 7-8 ore per evitare il colorito grigio.";
        }
        else if (msg.includes("acqua") || msg.includes("bere") || msg.includes("dieta")) {
            response = "L'idratazione parte dall'interno. Bere molto aiuta l'elasticità, ma ricorda che i grassi buoni (Omega-3) sono fondamentali per la barriera.";
        }
        else if (msg.includes("fumo") || msg.includes("sigaretta")) {
            response = "Il fumo riduce l'ossigenazione e distrugge la Vitamina C nella pelle, accelerando le rughe. La skincare può fare poco se non riduci il fumo!";
        }

        // 2. LOGICA ERRORI E MIX PERICOLOSI
        else if (msg.includes("mischiare") || msg.includes("insieme") || msg.includes("mix")) {
            response = "Attenzione ai mix! Non usare mai Retinolo e Acidi (AHA/BHA) nella stessa sessione: rischi forti irritazioni. Meglio alternarli.";
        }
        else if (msg.includes("vitamina c") && (msg.includes("retinolo") || msg.includes("acido"))) {
            response = "La Vitamina C pura è instabile. Usala al mattino per proteggerti dai radicali liberi e lascia Retinolo o Acidi per la sera.";
        }

        // 3. LOGICA CURIOSITÀ TECNICHE
        else if (msg.includes("ph") || msg.includes("acido") || msg.includes("basico")) {
            response = "Il pH della pelle è circa 5.5. Usare saponi troppo basici lo altera, rendendo la pelle un terreno fertile per i batteri dell'acne.";
        }
        else if (msg.includes("ossidazione") || msg.includes("scuro") || msg.includes("arancione")) {
            response = "Se il siero alla Vitamina C diventa arancione scuro, si è ossidato. Ha perso efficacia e potrebbe irritare: meglio non usarlo.";
        }

        // 4. LOGICA INGREDIENTI DEL DATABASE
        else if (msg.includes("salicilico") || msg.includes("bha")) {
            response = "L'Acido Salicilico (BHA) è liposolubile: entra nei pori e scioglie il sebo. Ottimo per punti neri e acne!";
        } 
        else if (msg.includes("niacinamide")) {
            response = "La Niacinamide è fantastica: restringe i pori, schiarisce le macchie e rinforza la barriera cutanea. Va bene per quasi tutti!";
        }
        else if (msg.includes("centella") || msg.includes("cica")) {
            response = "La Centella Asiatica calma i rossori. Se la pelle scotta o è irritata, cerca prodotti con questo ingrediente.";
        }
        else if (msg.includes("ceramidi")) {
            response = "Le Ceramidi sono i 'mattoni' della pelle. Se senti la pelle tirare, la tua barriera ha bisogno di loro per ripararsi.";
        }
        else if (msg.includes("peptidi")) {
            response = "I peptidi segnalano alla pelle di produrre collagene. Sono perfetti per mantenere la pelle soda e giovane.";
        }
        else if (msg.includes("ialuronico")) {
            response = "L'acido ialuronico trattiene l'acqua. Applicalo sempre sulla pelle umida per evitare che 'asciughi' la tua pelle!";
        }
        else if (msg.includes("retinolo") || msg.includes("vitamina a")) {
            response = "Il retinolo è l'oro della skincare anti-age. Introducilo gradualmente e usa SEMPRE la protezione solare al mattino.";
        }
        else if (msg.includes("solare") || msg.includes("spf") || msg.includes("sole")) {
            response = "L'SPF è il miglior prodotto anti-age esistente. Va messo ogni mattina, anche se piove, per proteggere il collagene dai raggi UV.";
        }

        // 5. LOGICA BRAND E PRODOTTI
        else if (msg.includes("la roche") || msg.includes("effaclar")) {
            response = "Effaclar Duo+ è ottimo per le imperfezioni e previene i segni post-acneici. Un classico della farmacia!";
        }
        else if (msg.includes("paula") || msg.includes("choice")) {
            response = "Il 2% BHA di Paula's Choice è iconico. Usalo 2-3 volte a settimana per iniziare a vedere i pori puliti.";
        }
        else if (msg.includes("ordinary")) {
            response = "The Ordinary offre attivi puri a prezzi incredibili. Ricorda solo di non stratificare troppi acidi diversi insieme!";
        }
        else if (msg.includes("medik8")) {
            response = "Medik8 è leader nel retinolo (Crystal Retinal). La loro tecnologia riduce al minimo l'irritazione.";
        }
        else if (msg.includes("cerave")) {
            response = "CeraVe è una garanzia per le pelli secche o irritate perché include ceramidi in ogni singolo prodotto.";
        }

        // 6. LOGICA GENERALE
        else if (msg.includes("ciao") || msg.includes("buongiorno") || msg.includes("hey")) {
            response = "Ciao! Sono Glowy, il tuo assistente virtuale. Posso darti consigli su lifestyle, ingredienti o errori da evitare. Chiedi pure!";
        }
        else if (msg.includes("grazie")) {
            response = "Di nulla! Splendere è un lavoro di squadra. ✨ Hai altri dubbi?";
        }

        body.innerHTML += `<div class="bot-msg">${response}</div>`;
        body.scrollTop = body.scrollHeight; 
    }, 800);
}
// Permette l'invio premendo il tasto Invio (Enter)
document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chat-input');

    if (chatInput) {
        chatInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});