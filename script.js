/* --- DATABASE PRINCIPALE ANALISI (Bilingue) --- */
const skincareDB = {
    "breakout": {
        "umido": {
            ingredient_it: "Acido Salicilico (BHA) + Niacinamide",
            ingredient_en: "Salicylic Acid (BHA) + Niacinamide",
            avoid_it: "Oli Minerali & Siliconi pesanti",
            avoid_en: "Mineral Oils & Heavy Silicones",
            products: "La Roche-Posay Effaclar Duo+, Paula’s Choice 2% BHA Liquid, The Ordinary Niacinamide 10%",
            prodImg: "img/IMG-01.jpg",
            natural_it: "Maschera Argilla Verde & Idrolato di Tea Tree",
            natural_en: "Green Clay Mask & Tea Tree Hydrosol",
            natImg: "img/IMG-02.jpg",
            explanation_it: "In un clima caldo e umido, la pelle affronta una doppia sfida: l'eccesso di sudore e l'aumento della produzione di sebo. Questa combinazione crea un film occlusivo sulla superficie cutanea che 'intrappola' i batteri all'interno dei pori, causando breakout infiammatori. L'Acido Salicilico è la chiave per navigare in questa confusione perché è l'unico acido in grado di sciogliersi nei grassi, penetrando letteralmente dentro il poro per liberarlo dall'interno. La Niacinamide completa l'azione riducendo la visibilità dei pori e controllando che la produzione di olio non vada fuori giri. Evita oli pesanti che agirebbero come un 'tappo' ulteriore in questo microclima.",
            explanation_en: "In a hot and humid climate, the skin faces a double challenge: excess sweat and increased sebum production. This combination creates an occlusive film on the skin's surface that traps bacteria inside pores, causing inflammatory breakouts. Salicylic Acid is key because it is the only oil-soluble acid, literally penetrating the pore to clear it from within. Niacinamide completes the action by reducing pore visibility and keeping oil production in check. Avoid heavy oils that would act as an additional clog in this microclimate."
        },
        "secco": {
            ingredient_it: "Acido Azelaico + Bakuchiol",
            ingredient_en: "Azelaic Acid + Bakuchiol",
            avoid_it: "Alcol Denaturato & Scrub fisici a grana grossa",
            avoid_en: "Denatured Alcohol & Coarse Physical Scrubs",
            products: "The Ordinary Azelaic Acid, CeraVe Blemish Control, Medik8 Bakuchiol Peptides",
            prodImg: "img/IMG-03.jpg",
            natural_it: "Impacco locale con Miele di Manuka e Aloe",
            natural_en: "Local Compress with Manuka Honey and Aloe",
            natImg: "img/IMG-04.jpg",
            explanation_it: "Navigare tra i breakout in un clima secco è complesso perché i prodotti anti-acne tradizionali sono spesso troppo aggressivi, finendo per seccare la pelle e peggiorare l'infiammazione (la cosiddetta 'acne da barriera compromessa'). Quando l'aria è secca, la pelle perde acqua e si screpola; queste micro-lesioni diventano la porta d'ingresso per i batteri. La soluzione non è 'asciugare' ma trattare delicatamente. L'Acido Azelaico è un ingrediente formidabile: uccide i batteri responsabili dei breakout ma ha anche proprietà lenitive che calmano il rossore tipico del clima freddo. È importante non usare scrub meccanici, che creerebbero solo ulteriori irritazioni su una pelle già fragile.",
            explanation_en: "Managing breakouts in a dry climate is complex because traditional anti-acne products are often too aggressive, drying out the skin and worsening inflammation (so-called barrier-compromised acne). When the air is dry, the skin loses water and cracks; these micro-lesions become entry points for bacteria. The solution is not to dry out, but to treat gently. Azelaic Acid is a formidable ingredient: it kills breakout-causing bacteria while soothing the redness typical of cold weather. Avoid mechanical scrubs, which only cause further irritation to fragile skin."
        }
    },
    "rossore": {
        "umido": {
            ingredient_it: "Centella Asiatica + Polifenoli del Thè",
            ingredient_en: "Centella Asiatica + Tea Polyphenols",
            avoid_it: "Profumi sintetici & Oli Essenziali puri",
            avoid_en: "Synthetic Fragrances & Pure Essential Oils",
            products: "Dr. Jart+ Cicapair Serum, Avène Antirougeurs, Erborian CC Red Correct",
            prodImg: "img/IMG-05.jpg",
            natural_it: "Impacchi freddi con infuso di Camomilla e Calendula",
            natural_en: "Cold Compresses with Chamomile and Calendula Infusion",
            natImg: "img/IMG-06.jpg",
            explanation_it: "Il calore e l'umidità causano una vasodilatazione naturale: i piccoli vasi sanguigni sotto la pelle si espandono per disperdere il calore, rendendo il viso visibilmente più rosso e congestionato. In questo scenario, la pelle è iper-reattiva. La Centella Asiatica è un ingrediente 'eroe' della tradizione orientale che la scienza moderna ha confermato essere un potente vasocostrittore e riparatore della barriera. Aiuta a 'chiudere' i vasi dilatati e a dare sollievo immediato. La regola d'oro qui è la semplicità: meno ingredienti usi, meno possibilità hai di irritare una pelle già sotto stress termico. Prediligi prodotti senza fragranze, che con il calore possono diventare fotosensibilizzanti.",
            explanation_en: "Heat and humidity cause natural vasodilation: small blood vessels under the skin expand to dissipate heat, making the face visibly redder and congested. In this scenario, the skin is hyper-reactive. Centella Asiatica is a hero ingredient from Eastern tradition that modern science has confirmed to be a powerful vasoconstrictor and barrier repairer. It helps calm dilated vessels and provide instant relief. The golden rule here is simplicity: the fewer ingredients you use, the less chance you have of irritating skin already under thermal stress. Prefer fragrance-free products, which can become photosynthesizing with heat."
        },
        "secco": {
            ingredient_it: "Ceramidi + Pantenolo (Pro-Vitamina B5)",
            ingredient_en: "Ceramides + Panthenol (Pro-Vitamin B5)",
            avoid_it: "Mentolo, Canfora & Detergenti schiumogeni",
            avoid_en: "Menthol, Camphor & Foaming Cleansers",
            products: "Dr. Jart+ Ceramidin Cream, La Roche-Posay Cicaplast Baume, Skinceuticals Redness Neutralizer",
            prodImg: "img/IMG-07.jpg",
            natural_it: "Olio di Calendula bio puro o Olio di Mandorle",
            natural_en: "Pure Organic Calendula Oil or Almond Oil",
            natImg: "img/IMG-08.jpg",
            explanation_it: "Il freddo e il vento agiscono come carta vetrata sulla pelle sensibile. In un clima secco, la barriera cutanea (composta da grassi e lipidi) si 'incrina', permettendo all'idratazione interna di evaporare e agli agenti esterni di penetrare, causando bruciore e rossore diffuso. Immagina la tua pelle come un muro di mattoni: le Ceramidi sono la malta che tiene uniti i mattoni. Senza di esse, il muro crolla. Inserire Ceramidi e Pantenolo nella routine serve a 'stuccare' queste micro-fessure, bloccando l'acqua all'interno e proteggendo i nervi cutanei dagli sbalzi termici. Evita assolutamente prodotti rinfrescanti come il mentolo, che darebbero una falsa sensazione di sollievo ma finirebbero per irritare ulteriormente la barriera.",
            explanation_en: "Cold and wind act like sandpaper on sensitive skin. In a dry climate, the skin barrier (made of fats and lipids) cracks, allowing internal hydration to evaporate and external agents to penetrate, causing burning and widespread redness. Imagine your skin as a brick wall: Ceramides are the mortar holding the bricks together. Without them, the wall collapses. Adding Ceramides and Panthenol to your routine helps seal these micro-cracks, locking water in and protecting skin nerves from temperature changes. Avoid cooling products like menthol, which give a false sense of relief but end up irritating the barrier further."
        }
    },
    "opacita": {
        "umido": {
            ingredient_it: "Vitamina C (Sodio Ascorbil Fosfato) + Enzimi",
            ingredient_en: "Vitamin C (Sodium Ascorbyal Phosphate) + Enzymes",
            avoid_it: "Creme notte ultra-ricche & Paraffina",
            avoid_en: "Ultra-rich Night Creams & Paraffin",
            products: "Vichy Liftactiv Vit C, Sunday Riley Good Genes, Olehenriksen Truth Serum",
            prodImg: "img/IMG-09.jpg",
            natural_it: "Maschera illuminante alla polpa di Papaia fresca",
            natural_en: "Brightening Fresh Papaya Pulp Mask",
            natImg: "img/IMG-10.jpg",
            explanation_it: "Il grigiore cutaneo in climi umidi è spesso causato da un mix di cellule morte che non riescono a staccarsi e particelle di inquinamento atmosferico (smog) che si attaccano al sebo superficiale. Questa 'patina' impedisce alla luce di riflettersi, rendendo il viso spento. La Vitamina C agisce come un riflettore luminoso e un potente antiossidante che neutralizza i danni da smog. In questo clima, però, è meglio evitare la Vitamina C pura (Acido Ascorbico) se troppo oleosa, preferendo derivati stabili che non appesantiscano. Gli enzimi della frutta (come quelli della papaia) sono ottimi perché 'mangiano' le cellule morte senza bisogno di strofinare, rivelando subito una pelle più fresca e luminosa.",
            explanation_en: "Dullness in humid climates is often caused by a mix of dead cells failing to shed and air pollution particles sticking to surface sebum. This film prevents light from reflecting, making the face look dull. Vitamin C acts as a light reflector and a powerful antioxidant that neutralizes smog damage. In this climate, however, it is better to avoid pure Vitamin C (Ascorbic Acid) if it is too oily, preferring stable derivatives that won't weigh the skin down. Fruit enzymes (like papaya) are great because they dissolve dead skin cells without scrubbing, immediately revealing fresher, brighter skin."
        },
        "secco": {
            ingredient_it: "Acido Ialuronico Multipeso + Vitamina E",
            ingredient_en: "Multi-weight Hyaluronic Acid + Vitamin E",
            avoid_it: "Maschere all'Argilla & Detergenti in polvere",
            avoid_en: "Clay Masks & Powder Cleansers",
            products: "Hada Labo Tokyo Hydrator, Estée Lauder Advanced Night Repair, Kiehl's Ultra Facial Cream",
            prodImg: "img/IMG-11.jpg",
            natural_it: "Maschera idratante Avocado, Miele e Yogurt intero",
            natural_en: "Avocado, Honey and Whole Yogurt Hydrating Mask",
            natImg: "img/IMG-12.jpg",
            explanation_it: "Quando l'aria è secca, la pelle diventa opaca perché perde la sua naturale 'riserva' d'acqua. Una pelle disidratata appare ruvida al tatto e questa irregolarità diffonde la luce in modo disordinato invece di rifletterla. La confusione qui sta nel pensare di aver bisogno di 'olio', quando spesso serve solo 'acqua'. L'Acido Ialuronico a diversi pesi molecolari è la soluzione: le molecole grandi restano in superficie per levigare, quelle piccole scendono in profondità per rimpolpare. La Vitamina E serve a sigillare questa idratazione. Evita le maschere all'argilla che assorbono l'umidità residua, lasciando la pelle ancora più spenta e 'segnata' dalla disidratazione.",
            explanation_en: "When the air is dry, the skin becomes dull because it loses its natural water reservoir. Dehydrated skin feels rough to the touch, and this unevenness scatters light randomly instead of reflecting it. The confusion here lies in thinking you need oil, when often you just need water. Multi-weight Hyaluronic Acid is the solution: larger molecules stay on the surface to smooth, while smaller ones sink deep to plump. Vitamin E seals this hydration in. Avoid clay masks, which absorb residual moisture, leaving the skin even duller and marked by dehydration."
        }
    },
    "invecchiamento": {
        "umido": {
            ingredient_it: "Peptidi + Retinolo in Microcapsule",
            ingredient_en: "Peptides + Microencapsulated Retinol",
            avoid_it: "Burri occlusivi (Karité in alte dosi) & Oli pesanti",
            avoid_en: "Occlusive Butters (high-dose Shea) & Heavy Oils",
            products: "Medik8 Crystal Retinal, Drunk Elephant Protini, Murad Retinol Youth Renewal",
            prodImg: "img/IMG-13.jpg",
            natural_it: "Massaggio facciale drenante con rullo di Giada freddo",
            natural_en: "Draining Facial Massage with Cold Jade Roller",
            natImg: "img/IMG-14.jpg",
            explanation_it: "L'invecchiamento cutaneo accelerato dall'umidità e dal calore si manifesta spesso con la perdita di elasticità (cedimento) e pori visibilmente più larghi. Il calore degrada il collagene più velocemente. I Peptidi sono messaggeri cellulari che 'ordinano' alla pelle di produrre nuova struttura, mentre il Retinolo accelera il ricambio delle cellule. In un clima umido, però, il retinolo può causare irritazione se la pelle suda; per questo usiamo la versione in microcapsule, che rilascia l'attivo lentamente durante la notte. È un errore usare creme notte troppo grasse in questo clima: rischi di svegliarti con il viso gonfio perché i pori non hanno respirato correttamente.",
            explanation_en: "Skin aging accelerated by humidity and heat often manifests as loss of elasticity (sagging) and visibly enlarged pores. Heat degrades collagen faster. Peptides are cellular messengers that order the skin to produce new structure, while Retinol accelerates cell turnover. In a humid climate, however, retinol can cause irritation if the skin sweats; that is why we use the microencapsulated version, which releases the active slowly overnight. It is a mistake to use night creams that are too greasy in this climate: you risk waking up with a puffy face because your pores couldn't breathe properly."
        },
        "secco": {
            ingredient_it: "Retinolo in Squalano + Fitosteroli",
            ingredient_en: "Retinol in Squalane + Phytosterols",
            avoid_it: "Esposizione solare senza protezione & Saponi alcalini",
            avoid_en: "Sun Exposure Without Protection & Alkaline Soaps",
            products: "The Ordinary Retinol in Squalane, SkinCeuticals Triple Lipid, Elizabeth Arden Retinol Capsules",
            prodImg: "img/IMG-15.jpg",
            natural_it: "Olio di Rosa Mosqueta (Retinolo naturale) e Olio di Argan",
            natural_en: "Rosehip Oil (Natural Retinol) & Argan Oil",
            natImg: "img/IMG-16.jpg",
            explanation_it: "Le rughe sottili e la perdita di densità sono accentuate drasticamente dal clima secco, che 'svuota' otticamente i tessuti. Il Retinolo è l'unico ingrediente con decenni di prove scientifiche sulla sua capacità di invertire i segni del tempo, ma nel clima secco può essere molto irritante. La soluzione intelligente è veicolarlo nello Squalano, un olio che imita il sebo umano e previene la desquamazione. I Fitosteroli aiutano a mantenere la pelle densa e compatta. Il più grande errore che puoi commettere è trascurare la protezione solare (SPF): i raggi UV passano anche attraverso il freddo e il vento, distruggendo le fibre elastiche che il retinolo sta cercando di ricostruire.",
            explanation_en: "Fine lines and loss of density are drastically accentuated by dry weather, which optically hollows out the tissues. Retinol is the only ingredient with decades of scientific proof of its ability to reverse the signs of aging, but in dry climates it can be highly irritating. The smart solution is to deliver it in Squalane, an oil that mimics human sebum and prevents flaking. Phytosterols help keep the skin dense and firm. The biggest mistake you can make is neglecting sun protection (SPF): UV rays penetrate cold and wind, destroying the elastic fibers that retinol is trying to rebuild."
        }
    }
};

/* --- TRADUZIONI UI INTERFACCIA --- */
const translations = {
    it: {
        subtitle: "Il tuo consulente di skincare digitale",
        labelSkinType: "1. Il tuo tipo di pelle",
        optGrassa: "Grassa / Oleosa",
        optSecca: "Secca / Disidratata",
        optMista: "Mista / Normale",
        labelConcern: "2. Preoccupazione principale",
        optBreakout: "Breakout / Acne",
        optRossore: "Rossore / Sensibilità",
        optOpacita: "Colorito spento / Macchie",
        optInvecchiamento: "Invecchiamento / Rughe",
        labelClimate: "3. Clima attuale",
        optUmido: "Caldo Umido / Inquinamento",
        optSecco: "Freddo Secco / Vento",
        btnAnalyze: "Genera Analisi Digitale",
        loaderText: "Interrogando il database ingredienti...",
        sosTitle: "Emergency Care SOS",
        sosSubtitle: "Seleziona l'emergenza per ricevere istruzioni immediate:",
        btnSosBrufolo: "SOS Brufolo",
        btnSosIrritazione: "SOS Irritazione",
        btnSosSecchezza: "SOS Secchezza",
        btnChatToggle: "Chiedi a Glowy!",
        
        // Dynamic output
        activeDuo: "Duo Attivo",
        blacklist: "Blacklist",
        profAnalysis: "Analisi Professionale del Profilo",
        focusTexture: "Focus sulla Texture",
        dermoSel: "Selezione Dermocosmetica",
        natRem: "Rimedio Naturale Alternativo"
    },
    en: {
        subtitle: "Your digital skincare advisor",
        labelSkinType: "1. Your skin type",
        optGrassa: "Oily / Greasy",
        optSecca: "Dry / Dehydrated",
        optMista: "Combination / Normal",
        labelConcern: "2. Main concern",
        optBreakout: "Breakout / Acne",
        optRossore: "Redness / Sensitivity",
        optOpacita: "Dull skin / Dark spots",
        optInvecchiamento: "Aging / Wrinkles",
        labelClimate: "3. Current climate",
        optUmido: "Hot Humid / Pollution",
        optSecco: "Cold Dry / Wind",
        btnAnalyze: "Generate Digital Analysis",
        loaderText: "Querying ingredient database...",
        sosTitle: "Emergency Care SOS",
        sosSubtitle: "Select the emergency to receive immediate instructions:",
        btnSosBrufolo: "SOS Pimple",
        btnSosIrritazione: "SOS Irritation",
        btnSosSecchezza: "SOS Dryness",
        btnChatToggle: "Ask Glowy!",

        // Dynamic output
        activeDuo: "Active Duo",
        blacklist: "Blacklist",
        profAnalysis: "Professional Profile Analysis",
        focusTexture: "Texture Focus",
        dermoSel: "Dermocosmetic Selection",
        natRem: "Alternative Natural Remedy"
    }
};

let currentLang = 'it';

function toggleLanguage() {
    currentLang = currentLang === 'it' ? 'en' : 'it';
    
    // Cambia il testo del pulsante lingua
    document.getElementById('langBtn').innerText = currentLang === 'it' ? 'EN' : 'IT';

    // Aggiorna tutti gli elementi statici con "data-key" nell'HTML
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang][key]) {
            element.innerText = translations[currentLang][key];
        }
    });

    // Cambia i testi del Chatbot
    const welcomeMsg = document.getElementById('chatWelcomeMsg');
    if (welcomeMsg) {
        welcomeMsg.innerText = currentLang === 'it' 
            ? "Ciao! Sono Glowy. Hai dubbi sulla tua routine o su un ingrediente?" 
            : "Hi! I'm Glowy. Do you have questions about your routine or an ingredient?";
    }

    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.placeholder = currentLang === 'it' ? "Scrivi un messaggio..." : "Type a message...";
    }

    // Se ci sono risultati a schermo, li rigenera al volo nella nuova lingua
    const results = document.getElementById('results');
    if (results.style.display === 'block') {
        analyzeSkin();
    }
}

/* --- FUNZIONE ANALISI --- */
function analyzeSkin() {
    const loader = document.getElementById('loader');
    const results = document.getElementById('results');
    const content = document.getElementById('routineContent');

    const skin = document.getElementById('skinType').value;
    const concern = document.getElementById('concern').value;
    const climate = document.getElementById('climate').value;

    // Mostra il loader solo alla prima generazione (non durante il cambio lingua istantaneo)
    if (results.style.display !== 'block') {
        loader.style.display = 'block';
        results.style.display = 'none';
    }

    setTimeout(() => {
        const data = skincareDB[concern][climate];
        
        let textureAdvice = "";
        if (skin === "grassa") {
            textureAdvice = currentLang === 'it' 
                ? "Data la tua pelle grassa, l'obiettivo è idratare senza appesantire. Prediligi texture in 'Water-Gel' o sieri acquosi. Evita oli minerali che creerebbero un film lucido."
                : "Given your oily skin, the goal is to hydrate without weighing it down. Prefer 'Water-Gel' textures or watery serums. Avoid mineral oils that would create a shiny film.";
        } else if (skin === "secca") {
            textureAdvice = currentLang === 'it'
                ? "Per la tua pelle secca, la texture deve essere 'avvolgente'. Cerca creme con una fase grassa importante per 'stoppare' l'evaporazione dell'acqua."
                : "For your dry skin, the texture must be rich and enveloping. Look for creams with a significant lipid phase to block water evaporation.";
        } else {
            textureAdvice = currentLang === 'it'
                ? "La pelle mista richiede equilibrio: sieri leggeri ovunque, ma creme più ricche solo sulle guance. Evita prodotti troppo sgrassanti sulla zona T."
                : "Combination skin requires balance: light serums all over, but richer creams only on the cheeks. Avoid overly stripping products on the T-zone.";
        }

        // Recupera le traduzioni del database in base alla lingua attiva
        const activeIngredient = data[`ingredient_${currentLang}`];
        const activeAvoid = data[`avoid_${currentLang}`];
        const activeExplanation = data[`explanation_${currentLang}`];
        const activeNatural = data[`natural_${currentLang}`];

        content.innerHTML = `
            <div class="badge-container">
                <span class="tag tag-key">${translations[currentLang].activeDuo}: ${activeIngredient}</span>
                <span class="tag tag-avoid">${translations[currentLang].blacklist}: ${activeAvoid}</span>
            </div>
            
            <div class="analysis-section">
                <h3>${translations[currentLang].profAnalysis}</h3>
                <p>${activeExplanation}</p>
                <div style="background: #fdfaf6; padding: 20px; border-radius: 12px; border-left: 5px solid #94a684; margin-top: 25px;">
                    <p style="margin:0; font-size: 1.1rem; color: #555;"><strong> ${translations[currentLang].focusTexture}:</strong> ${textureAdvice}</p>
                </div>
            </div>

            <div class="product-grid">
                <div class="product-card">
                    <img src="${data.prodImg}" alt="Prodotto" class="res-img">
                    <h4>${translations[currentLang].dermoSel}</h4>
                    <p>${data.products}</p>
                </div>
                <div class="product-card">
                    <img src="${data.natImg}" alt="Rimedio Naturale" class="res-img">
                    <h4>${translations[currentLang].natRem}</h4>
                    <p>${activeNatural}</p>
                </div>
            </div>
            <p class="footer-info">Glow-Algorithm v2.5 | Digital Skincare Expert</p>
        `;

        loader.style.display = 'none';
        results.style.display = 'block';
    }, results.style.display === 'block' ? 0 : 1200); // 0ms se stiamo solo cambiando lingua per evitare lag
}

/* --- FUNZIONI SOS --- */
const sosDB = {
    "brufolo": {
        do_it: "Applica un cubetto di ghiaccio avvolto in un fazzoletto per 2 minuti. Usa un patch idrocolloide se è 'aperto'.",
        dont_it: "NON schiacciarlo. Spingeresti l'infezione più in profondità garantendo una cicatrice duratura.",
        do_en: "Apply an ice cube wrapped in a tissue for 2 minutes. Use a hydrocolloid patch if it is 'open'.",
        dont_en: "DO NOT pop it. You will push the infection deeper, ensuring a long-lasting scar."
    },
    "irritazione": {
        do_it: "Sciacqua il viso con acqua fredda. Sospendi ogni attivo (acidi, retinolo) per 72 ore. Usa solo acqua termale.",
        dont_it: "NON strofinare il viso e non applicare trucco pesante: la pelle ha bisogno di respirare.",
        do_en: "Rinse your face with cold water. Suspend all active ingredients (acids, retinol) for 72 hours. Use only thermal water.",
        dont_en: "DO NOT scrub your face or apply heavy makeup: your skin needs to breathe."
    },
    "secchezza": {
        do_it: "Applica uno strato generoso di crema base senza profumo sulla pelle ancora umida. Usa un umidificatore.",
        dont_it: "NON fare docce troppo calde e non usare detergenti schiumogeni che rimuovono gli oli naturali.",
        do_en: "Apply a generous layer of fragrance-free basic cream on still-damp skin. Use a humidifier.",
        dont_en: "DO NOT take overly hot showers or use foaming cleansers that strip natural oils."
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
    
    // Traduzione dei titoli dinamici del popup SOS
    let translatedTitle = "";
    if (type === "brufolo") translatedTitle = currentLang === 'it' ? "Protocollo Brufolo" : "Pimple Protocol";
    if (type === "irritazione") translatedTitle = currentLang === 'it' ? "Protocollo Irritazione" : "Irritation Protocol";
    if (type === "secchezza") translatedTitle = currentLang === 'it' ? "Protocollo Secchezza" : "Dryness Protocol";

    const labelDo = currentLang === 'it' ? "COSA FARE" : "WHAT TO DO";
    const labelDont = currentLang === 'it' ? "COSA NON FARE" : "WHAT NOT TO DO";

    resultDiv.innerHTML = `
        <h4 style="color: #d62828; text-transform: uppercase;">${translatedTitle}</h4>
        <p>✅ <strong>${labelDo}:</strong> ${data[`do_${currentLang}`]}</p>
        <p>❌ <strong>${labelDont}:</strong> ${data[`dont_${currentLang}`]}</p>
    `;
}

/* --- FUNZIONI CHATBOT GLOWY (Bilingue v3.0) --- */
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
        let response = {
            it: "Domanda interessante! La skincare è una scienza. Vuoi sapere come inserire questo elemento nella tua routine?",
            en: "Interesting question! Skincare is a science. Do you want to know how to include this element in your routine?"
        };
        const msg = text.toLowerCase();

        // 1. LOGICA LIFESTYLE & ABITUDINI
        if (msg.includes("dormire") || msg.includes("sonno") || msg.includes("notte") || msg.includes("sleep") || msg.includes("night")) {
            response.it = "Il 'Beauty Sleep' esiste! Di notte la pelle si rigenera e produce collagene. Cerca di dormire 7-8 ore per evitare il colorito grigio.";
            response.en = "Beauty Sleep is real! At night, skin regenerates and produces collagen. Try to sleep 7-8 hours to avoid a dull complexion.";
        }
        else if (msg.includes("acqua") || msg.includes("bere") || msg.includes("dieta") || msg.includes("water") || msg.includes("drink") || msg.includes("diet")) {
            response.it = "L'idratazione parte dall'interno. Bere molto aiuta l'elasticità, ma ricorda che i grassi buoni (Omega-3) sono fondamentali per la barriera.";
            response.en = "Hydration starts from within. Drinking plenty of water helps elasticity, but remember that healthy fats (Omega-3) are crucial for the barrier.";
        }
        else if (msg.includes("fumo") || msg.includes("sigaretta") || msg.includes("smoke") || msg.includes("cigarette")) {
            response.it = "Il fumo riduce l'ossigenazione e distrugge la Vitamina C nella pelle, accelerando le rughe. La skincare può fare poco se non riduci il fumo!";
            response.en = "Smoking reduces oxygenation and destroys Vitamin C in the skin, accelerating wrinkles. Skincare can only do so much if you don't reduce smoking!";
        }

        // 2. LOGICA ERRORI E MIX PERICOLOSI
        else if (msg.includes("mischiare") || msg.includes("insieme") || msg.includes("mix") || msg.includes("combine")) {
            response.it = "Attenzione ai mix! Non usare mai Retinolo e Acidi (AHA/BHA) nella stessa sessione: rischi forti irritazioni. Meglio alternarli.";
            response.en = "Watch out for mixing! Never use Retinol and Acids (AHA/BHA) in the same session: you risk severe irritation. Better to alternate them.";
        }
        else if ((msg.includes("vitamina c") || msg.includes("vitamin c")) && (msg.includes("retinolo") || msg.includes("acido") || msg.includes("retinol") || msg.includes("acid"))) {
            response.it = "La Vitamina C pura è instabile. Usala al mattino per proteggerti dai radicali limeri e lascia Retinolo o Acidi per la sera.";
            response.en = "Pure Vitamin C is unstable. Use it in the morning to protect against free radicals and leave Retinol or Acids for the evening.";
        }

        // 3. LOGICA CURIOSITÀ TECNICHE
        else if (msg.includes("ph") || msg.includes("acido") || msg.includes("basico") || msg.includes("acid") || msg.includes("basic")) {
            response.it = "Il pH della pelle è circa 5.5. Usare saponi troppo basici lo altera, rendendo la pelle un terreno fertile per i batteri dell'acne.";
            response.en = "The skin's pH is about 5.5. Using soaps that are too alkaline alters it, making the skin a breeding ground for acne bacteria.";
        }
        else if (msg.includes("ossidazione") || msg.includes("scuro") || msg.includes("arancione") || msg.includes("oxidation") || msg.includes("dark") || msg.includes("orange")) {
            response.it = "Se il siero alla Vitamina C diventa arancione scuro, si è ossidato. Ha perso efficacia e potrebbe irritare: meglio non usarlo.";
            response.en = "If your Vitamin C serum turns dark orange, it has oxidized. It has lost its effectiveness and could irritate your skin: best not to use it.";
        }

        // 4. LOGICA INGREDIENTI
        else if (msg.includes("salicilico") || msg.includes("bha") || msg.includes("salicyl")) {
            response.it = "L'Acido Salicilico (BHA) è liposolubile: entra nei pori e scioglie il sebo. Ottimo per punti neri e acne!";
            response.en = "Salicylic Acid (BHA) is oil-soluble: it enters pores and dissolves sebum. Great for blackheads and acne!";
        } 
        else if (msg.includes("niacinamide")) {
            response.it = "La Niacinamide è fantastica: restringe i pori, schiarisce le macchie e rinforza la barriera cutanea. Va bene per quasi tutti!";
            response.en = "Niacinamide is amazing: it tightens pores, fades dark spots, and strengthens the skin barrier. It works for almost everyone!";
        }
        else if (msg.includes("centella") || msg.includes("cica")) {
            response.it = "La Centella Asiatica calma i rossori. Se la pelle scotta o è irritata, cerca prodotti con questo ingrediente.";
            response.en = "Centella Asiatica soothes redness. If your skin feels hot or irritated, look for products with this ingredient.";
        }
        else if (msg.includes("ceramidi") || msg.includes("ceramide")) {
            response.it = "Le Ceramidi sono i 'mattoni' della pelle. Se senti la pelle tirare, la tua barriera ha bisogno di loro per ripararsi.";
            response.en = "Ceramides are the skin's building blocks. If your skin feels tight, your barrier needs them to repair itself.";
        }
        else if (msg.includes("peptidi") || msg.includes("peptide")) {
            response.it = "I peptidi segnalano alla pelle di produrre collagene. Sono perfetti per mantenere la pelle soda e giovane.";
            response.en = "Peptides signal the skin to produce collagen. They are perfect for keeping the skin firm and youthful.";
        }
        else if (msg.includes("ialuronico") || msg.includes("hyaluronic")) {
            response.it = "L'acido ialuronico trattiene l'acqua. Applicalo sempre sulla pelle umida per evitare che 'asciughi' la tua pelle!";
            response.en = "Hyaluronic acid holds water. Always apply it to damp skin to prevent it from drawing moisture out of your skin!";
        }
        else if (msg.includes("retinolo") || msg.includes("vitamina a") || msg.includes("retinol") || msg.includes("vitamin a")) {
            response.it = "Il retinolo è l'oro della skincare anti-age. Introducilo gradualmente e usa SEMPRE la protezione solare al mattino.";
            response.en = "Retinol is the gold standard of anti-aging skincare. Introduce it gradually and ALWAYS wear sunscreen in the morning.";
        }
        else if (msg.includes("solare") || msg.includes("spf") || msg.includes("sole") || msg.includes("sun")) {
            response.it = "L'SPF è il miglior prodotto anti-age esistente. Va messo ogni mattina, anche se piove, per proteggere il collagene dai raggi UV.";
            response.en = "SPF is the best anti-aging product out there. It must be applied every morning, even if it's raining, to protect collagen from UV rays.";
        }

        // 5. LOGICA BRAND
        else if (msg.includes("la roche") || msg.includes("effaclar")) {
            response.it = "Effaclar Duo+ è ottimo per le imperfezioni e previene i segni post-acneici. Un classico della farmacia!";
            response.en = "Effaclar Duo+ is great for blemishes and prevents post-acne marks. A pharmacy classic!";
        }
        else if (msg.includes("paula") || msg.includes("choice")) {
            response.it = "Il 2% BHA di Paula's Choice è iconico. Usalo 2-3 volte a settimana per iniziare a vedere i pori puliti.";
            response.en = "Paula's Choice 2% BHA is iconic. Use it 2-3 times a week to start seeing clean pores.";
        }
        else if (msg.includes("ordinary")) {
            response.it = "The Ordinary offre attivi puri a prezzi incredibili. Ricorda solo di non stratificare troppi acidi diversi insieme!";
            response.en = "The Ordinary offers pure active ingredients at incredible prices. Just remember not to layer too many different acids together!";
        }
        else if (msg.includes("medik8")) {
            response.it = "Medik8 è leader nel retinolo (Crystal Retinal). La loro tecnologia riduce al minimo l'irritazione.";
            response.en = "Medik8 is a leader in retinol (Crystal Retinal). Their technology minimizes irritation.";
        }
        else if (msg.includes("cerave")) {
            response.it = "CeraVe è una garanzia per le pelli secche o irritate perché include ceramidi in ogni singolo prodotto.";
            response.en = "CeraVe is a guarantee for dry or irritated skin because it includes ceramides in every single product.";
        }

        // 6. LOGICA GENERALE
        else if (msg.includes("ciao") || msg.includes("buongiorno") || msg.includes("hey") || msg.includes("hello") || msg.includes("hi")) {
            response.it = "Ciao! Sono Glowy, il tuo assistente virtuale. Posso darti consigli su lifestyle, ingredienti o errori da evitare. Chiedi pure!";
            response.en = "Hi! I'm Glowy, your virtual assistant. I can give you advice on lifestyle, ingredients, or mistakes to avoid. Just ask!";
        }
        else if (msg.includes("grazie") || msg.includes("thanks") || msg.includes("thank you")) {
            response.it = "Di nulla! Splendere è un lavoro di squadra. ✨ Hai altri dubbi?";
            response.en = "You're welcome! Glowing is a team effort. ✨ Do you have other questions?";
        }

        // Stampa la risposta in base alla lingua attiva
        body.innerHTML += `<div class="bot-msg">${response[currentLang]}</div>`;
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