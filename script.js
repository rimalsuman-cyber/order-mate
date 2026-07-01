const STORAGE_KEYS = {
  menu: "ordermate_menu",
  categories: "ordermate_categories",
  orders: "ordermate_orders",
  currency: "ordermate_currency",
  language: "ordermate_language",
};

const CURRENCY_OPTIONS = {
  CHF: { locale: "de-CH", rate: 0.9 },
  EUR: { locale: "de-DE", rate: 0.93 },
  USD: { locale: "en-US", rate: 1 },
  GBP: { locale: "en-GB", rate: 0.79 },
  AED: { locale: "en-AE", rate: 3.67 },
  RON: { locale: "ro-RO", rate: 4.63 },
  HUF: { locale: "hu-HU", rate: 366.5 },
  INR: { locale: "en-IN", rate: 83.5 },
};

const STATUS_LABELS = {
  new: "New",
  accepted: "Accepted",
  preparing: "Preparing",
  ready: "Ready",
  completed: "Completed",
};

const ACTION_TEXT = {
  EN: { add: "Add", qty: "Qty", appSubtitle: "Restaurant order management", waiterStation: "Waiter station", reviewBefore: "Review before sending", kitchenDisplay: "Kitchen display", managerTools: "Manager tools" },
  DE: { add: "Hinzufügen", qty: "Menge", appSubtitle: "Restaurant-Bestellverwaltung", waiterStation: "Service-Station", reviewBefore: "Vor dem Senden prüfen", kitchenDisplay: "Küchenanzeige", managerTools: "Manager-Werkzeuge" },
  IT: { add: "Aggiungi", qty: "Qtà", appSubtitle: "Gestione ordini ristorante", waiterStation: "Postazione cameriere", reviewBefore: "Controlla prima dell'invio", kitchenDisplay: "Schermo cucina", managerTools: "Strumenti manager" },
  FR: { add: "Ajouter", qty: "Qté", appSubtitle: "Gestion des commandes restaurant", waiterStation: "Poste serveur", reviewBefore: "Vérifier avant envoi", kitchenDisplay: "Écran cuisine", managerTools: "Outils manager" },
  TR: { add: "Ekle", qty: "Adet", appSubtitle: "Restoran sipariş yönetimi", waiterStation: "Garson ekranı", reviewBefore: "Göndermeden önce kontrol et", kitchenDisplay: "Mutfak ekranı", managerTools: "Yönetici araçları" },
  AL: { add: "Shto", qty: "Sasia", appSubtitle: "Menaxhimi i porosive të restorantit", waiterStation: "Stacioni i kamarierit", reviewBefore: "Kontrollo para dërgimit", kitchenDisplay: "Ekrani i kuzhinës", managerTools: "Mjetet e menaxherit" },
};

const I18N = {
  EN: {
    ui: {
      offline: "Offline", language: "Language", currencySetting: "Currency setting", takeOrder: "Take Order", clear: "Clear",
      table: "Table", waiter: "Waiter", menuItem: "Menu item", currentOrder: "Current Order", orderNotes: "Order notes",
      sendOrder: "Send Order to Kitchen", liveOrders: "Live Orders", refresh: "Refresh", menuSales: "Menu & Sales",
      resetDemo: "Reset Demo", addMenuItem: "Add Menu Item", editMenuItem: "Edit Menu Item", itemName: "Item name",
      category: "Category", price: "Price", available: "Available", unavailable: "Unavailable", saveItem: "Save Item",
      cancel: "Cancel", menuItems: "Menu Items", completedOrders: "Completed orders", totalSales: "Total sales",
      navTake: "Take", navOrder: "Order", navKitchen: "Kitchen", navLive: "Live", navAdmin: "Admin", navManage: "Manage",
      noItemsAdded: "No items added yet.", noItemsCategory: "No items in this category.", noItemsAvailable: "No items available",
      availableNow: "Available now", each: "each", itemNote: "Item note", itemNotePlaceholder: "no onion, extra spicy",
      orderNotePlaceholder: "Allergy, timing, or service note", recentStatuses: "Recent order statuses appear here.",
      noKitchenOrders: "No active kitchen orders.", acceptOrder: "Accept Order", startPreparing: "Start Preparing",
      markReady: "Mark as Ready", completeOrder: "Complete Order", orderNote: "Order note", menuItemSaved: "Menu item saved",
      menuItemDeleted: "Menu item deleted", categoryAdded: "Category added", demoReset: "Demo data reset",
      orderSent: "Order sent to kitchen", addBeforePrint: "Add items before printing", allowPopups: "Allow popups to print the order",
      currencyChanged: "Currency changed to", languageChanged: "Language changed to", orderMarked: "Order marked",
      completedHistoryEmpty: "Completed orders appear here.", itemTypes: "item types", printed: "Printed", total: "Total",
      ordermateTicket: "OrderMate Ticket", remove: "Remove", delete: "Delete", edit: "Edit", newCategoryName: "New category name"
    },
    categories: { "Starters": "Starters", "Main Dishes": "Main Dishes", "Drinks": "Drinks", "Desserts": "Desserts" },
    foods: {
      "Tomato Bruschetta": "Tomato Bruschetta", "Crispy Calamari": "Crispy Calamari", "Herb Garlic Bread": "Herb Garlic Bread",
      "Grilled Salmon": "Grilled Salmon", "Truffle Mushroom Pasta": "Truffle Mushroom Pasta", "Charcoal Chicken Plate": "Charcoal Chicken Plate",
      "Sparkling Lemonade": "Sparkling Lemonade", "Iced Mint Tea": "Iced Mint Tea", "House Espresso": "House Espresso",
      "Chocolate Fondant": "Chocolate Fondant", "Vanilla Panna Cotta": "Vanilla Panna Cotta"
    },
    status: { new: "New", accepted: "Accepted", preparing: "Preparing", ready: "Ready", completed: "Completed" }
  },
  DE: {
    ui: {
      offline: "Offline", language: "Sprache", currencySetting: "Währung", takeOrder: "Bestellung aufnehmen", clear: "Leeren",
      table: "Tisch", waiter: "Service", menuItem: "Menüpunkt", currentOrder: "Aktuelle Bestellung", orderNotes: "Bestellnotizen",
      sendOrder: "An Küche senden", liveOrders: "Live-Bestellungen", refresh: "Aktualisieren", menuSales: "Menü & Umsatz",
      resetDemo: "Demo zurücksetzen", addMenuItem: "Menüpunkt hinzufügen", editMenuItem: "Menüpunkt bearbeiten", itemName: "Artikelname",
      category: "Kategorie", price: "Preis", available: "Verfügbar", unavailable: "Nicht verfügbar", saveItem: "Artikel speichern",
      cancel: "Abbrechen", menuItems: "Menüpunkte", completedOrders: "Abgeschlossene Bestellungen", totalSales: "Gesamtumsatz",
      navTake: "Aufnehmen", navOrder: "Bestellung", navKitchen: "Küche", navLive: "Live", navAdmin: "Admin", navManage: "Verwalten",
      noItemsAdded: "Noch keine Artikel hinzugefügt.", noItemsCategory: "Keine Artikel in dieser Kategorie.", noItemsAvailable: "Keine Artikel verfügbar",
      availableNow: "Jetzt verfügbar", each: "pro Stück", itemNote: "Artikelnote", itemNotePlaceholder: "ohne Zwiebeln, extra scharf",
      orderNotePlaceholder: "Allergie, Timing oder Servicenotiz", recentStatuses: "Aktuelle Bestellstatus erscheinen hier.",
      noKitchenOrders: "Keine aktiven Küchenbestellungen.", acceptOrder: "Bestellung annehmen", startPreparing: "Zubereitung starten",
      markReady: "Als bereit markieren", completeOrder: "Bestellung abschließen", orderNote: "Bestellnotiz", menuItemSaved: "Menüpunkt gespeichert",
      menuItemDeleted: "Menüpunkt gelöscht", categoryAdded: "Kategorie hinzugefügt", demoReset: "Demo-Daten zurückgesetzt",
      orderSent: "Bestellung an Küche gesendet", addBeforePrint: "Vor dem Drucken Artikel hinzufügen", allowPopups: "Popups zum Drucken erlauben",
      currencyChanged: "Währung geändert zu", languageChanged: "Sprache geändert zu", orderMarked: "Bestellung markiert als",
      completedHistoryEmpty: "Abgeschlossene Bestellungen erscheinen hier.", itemTypes: "Artikelarten", printed: "Gedruckt", total: "Total",
      ordermateTicket: "OrderMate Bon", remove: "Entfernen", delete: "Löschen", edit: "Bearbeiten", newCategoryName: "Neuer Kategoriename"
    },
    categories: { "Starters": "Vorspeisen", "Main Dishes": "Hauptgerichte", "Drinks": "Getränke", "Desserts": "Desserts" },
    foods: {
      "Tomato Bruschetta": "Tomaten-Bruschetta", "Crispy Calamari": "Knusprige Calamari", "Herb Garlic Bread": "Kräuter-Knoblauchbrot",
      "Grilled Salmon": "Gegrillter Lachs", "Truffle Mushroom Pasta": "Trüffel-Pilz-Pasta", "Charcoal Chicken Plate": "Holzkohle-Hähnchenteller",
      "Sparkling Lemonade": "Sprudelnde Limonade", "Iced Mint Tea": "Eis-Minztee", "House Espresso": "Haus-Espresso",
      "Chocolate Fondant": "Schokoladenfondant", "Vanilla Panna Cotta": "Vanille-Panna-Cotta"
    },
    status: { new: "Neu", accepted: "Angenommen", preparing: "In Zubereitung", ready: "Bereit", completed: "Abgeschlossen" }
  },
  IT: {
    ui: {
      offline: "Offline", language: "Lingua", currencySetting: "Valuta", takeOrder: "Prendi ordine", clear: "Cancella",
      table: "Tavolo", waiter: "Cameriere", menuItem: "Voce menu", currentOrder: "Ordine attuale", orderNotes: "Note ordine",
      sendOrder: "Invia in cucina", liveOrders: "Ordini live", refresh: "Aggiorna", menuSales: "Menu e vendite",
      resetDemo: "Reimposta demo", addMenuItem: "Aggiungi voce", editMenuItem: "Modifica voce", itemName: "Nome voce",
      category: "Categoria", price: "Prezzo", available: "Disponibile", unavailable: "Non disponibile", saveItem: "Salva voce",
      cancel: "Annulla", menuItems: "Voci menu", completedOrders: "Ordini completati", totalSales: "Vendite totali",
      navTake: "Prendi", navOrder: "Ordine", navKitchen: "Cucina", navLive: "Live", navAdmin: "Admin", navManage: "Gestisci",
      noItemsAdded: "Nessun articolo aggiunto.", noItemsCategory: "Nessun articolo in questa categoria.", noItemsAvailable: "Nessun articolo disponibile",
      availableNow: "Disponibile ora", each: "cad.", itemNote: "Nota articolo", itemNotePlaceholder: "senza cipolla, extra piccante",
      orderNotePlaceholder: "Allergia, tempistiche o nota servizio", recentStatuses: "Gli stati recenti appaiono qui.",
      noKitchenOrders: "Nessun ordine attivo in cucina.", acceptOrder: "Accetta ordine", startPreparing: "Inizia preparazione",
      markReady: "Segna pronto", completeOrder: "Completa ordine", orderNote: "Nota ordine", menuItemSaved: "Voce salvata",
      menuItemDeleted: "Voce eliminata", categoryAdded: "Categoria aggiunta", demoReset: "Dati demo reimpostati",
      orderSent: "Ordine inviato in cucina", addBeforePrint: "Aggiungi articoli prima di stampare", allowPopups: "Consenti popup per stampare",
      currencyChanged: "Valuta cambiata in", languageChanged: "Lingua cambiata in", orderMarked: "Ordine segnato come",
      completedHistoryEmpty: "Gli ordini completati appaiono qui.", itemTypes: "tipi di articoli", printed: "Stampato", total: "Totale",
      ordermateTicket: "Scontrino OrderMate", remove: "Rimuovi", delete: "Elimina", edit: "Modifica", newCategoryName: "Nuovo nome categoria"
    },
    categories: { "Starters": "Antipasti", "Main Dishes": "Piatti principali", "Drinks": "Bevande", "Desserts": "Dolci" },
    foods: {
      "Tomato Bruschetta": "Bruschetta al pomodoro", "Crispy Calamari": "Calamari croccanti", "Herb Garlic Bread": "Pane all'aglio alle erbe",
      "Grilled Salmon": "Salmone alla griglia", "Truffle Mushroom Pasta": "Pasta tartufo e funghi", "Charcoal Chicken Plate": "Piatto di pollo alla brace",
      "Sparkling Lemonade": "Limonata frizzante", "Iced Mint Tea": "Tè freddo alla menta", "House Espresso": "Espresso della casa",
      "Chocolate Fondant": "Fondant al cioccolato", "Vanilla Panna Cotta": "Panna cotta alla vaniglia"
    },
    status: { new: "Nuovo", accepted: "Accettato", preparing: "In preparazione", ready: "Pronto", completed: "Completato" }
  },
  FR: {
    ui: {
      offline: "Hors ligne", language: "Langue", currencySetting: "Devise", takeOrder: "Prendre commande", clear: "Effacer",
      table: "Table", waiter: "Serveur", menuItem: "Article", currentOrder: "Commande actuelle", orderNotes: "Notes de commande",
      sendOrder: "Envoyer en cuisine", liveOrders: "Commandes en direct", refresh: "Actualiser", menuSales: "Menu et ventes",
      resetDemo: "Réinitialiser", addMenuItem: "Ajouter un article", editMenuItem: "Modifier l'article", itemName: "Nom de l'article",
      category: "Catégorie", price: "Prix", available: "Disponible", unavailable: "Indisponible", saveItem: "Enregistrer",
      cancel: "Annuler", menuItems: "Articles du menu", completedOrders: "Commandes terminées", totalSales: "Ventes totales",
      navTake: "Prendre", navOrder: "Commande", navKitchen: "Cuisine", navLive: "Direct", navAdmin: "Admin", navManage: "Gérer",
      noItemsAdded: "Aucun article ajouté.", noItemsCategory: "Aucun article dans cette catégorie.", noItemsAvailable: "Aucun article disponible",
      availableNow: "Disponible maintenant", each: "chacun", itemNote: "Note article", itemNotePlaceholder: "sans oignon, très épicé",
      orderNotePlaceholder: "Allergie, timing ou note de service", recentStatuses: "Les statuts récents apparaissent ici.",
      noKitchenOrders: "Aucune commande active en cuisine.", acceptOrder: "Accepter commande", startPreparing: "Commencer préparation",
      markReady: "Marquer prêt", completeOrder: "Terminer commande", orderNote: "Note commande", menuItemSaved: "Article enregistré",
      menuItemDeleted: "Article supprimé", categoryAdded: "Catégorie ajoutée", demoReset: "Données réinitialisées",
      orderSent: "Commande envoyée en cuisine", addBeforePrint: "Ajoutez des articles avant impression", allowPopups: "Autorisez les popups pour imprimer",
      currencyChanged: "Devise changée en", languageChanged: "Langue changée en", orderMarked: "Commande marquée",
      completedHistoryEmpty: "Les commandes terminées apparaissent ici.", itemTypes: "types d'articles", printed: "Imprimé", total: "Total",
      ordermateTicket: "Ticket OrderMate", remove: "Retirer", delete: "Supprimer", edit: "Modifier", newCategoryName: "Nom de nouvelle catégorie"
    },
    categories: { "Starters": "Entrées", "Main Dishes": "Plats principaux", "Drinks": "Boissons", "Desserts": "Desserts" },
    foods: {
      "Tomato Bruschetta": "Bruschetta tomate", "Crispy Calamari": "Calamars croustillants", "Herb Garlic Bread": "Pain ail et herbes",
      "Grilled Salmon": "Saumon grillé", "Truffle Mushroom Pasta": "Pâtes truffe et champignons", "Charcoal Chicken Plate": "Assiette de poulet grillé",
      "Sparkling Lemonade": "Limonade pétillante", "Iced Mint Tea": "Thé glacé à la menthe", "House Espresso": "Espresso maison",
      "Chocolate Fondant": "Fondant au chocolat", "Vanilla Panna Cotta": "Panna cotta vanille"
    },
    status: { new: "Nouveau", accepted: "Accepté", preparing: "En préparation", ready: "Prêt", completed: "Terminé" }
  },
  TR: {
    ui: {
      offline: "Çevrimdışı", language: "Dil", currencySetting: "Para birimi", takeOrder: "Sipariş Al", clear: "Temizle",
      table: "Masa", waiter: "Garson", menuItem: "Menü ürünü", currentOrder: "Mevcut Sipariş", orderNotes: "Sipariş notları",
      sendOrder: "Mutfağa Gönder", liveOrders: "Canlı Siparişler", refresh: "Yenile", menuSales: "Menü ve Satış",
      resetDemo: "Demoyu Sıfırla", addMenuItem: "Menü Ürünü Ekle", editMenuItem: "Menü Ürününü Düzenle", itemName: "Ürün adı",
      category: "Kategori", price: "Fiyat", available: "Mevcut", unavailable: "Mevcut değil", saveItem: "Ürünü Kaydet",
      cancel: "İptal", menuItems: "Menü Ürünleri", completedOrders: "Tamamlanan siparişler", totalSales: "Toplam satış",
      navTake: "Al", navOrder: "Sipariş", navKitchen: "Mutfak", navLive: "Canlı", navAdmin: "Admin", navManage: "Yönet",
      noItemsAdded: "Henüz ürün eklenmedi.", noItemsCategory: "Bu kategoride ürün yok.", noItemsAvailable: "Ürün yok",
      availableNow: "Şu an mevcut", each: "adet", itemNote: "Ürün notu", itemNotePlaceholder: "soğansız, ekstra acı",
      orderNotePlaceholder: "Alerji, zamanlama veya servis notu", recentStatuses: "Son sipariş durumları burada görünür.",
      noKitchenOrders: "Aktif mutfak siparişi yok.", acceptOrder: "Siparişi Kabul Et", startPreparing: "Hazırlamaya Başla",
      markReady: "Hazır İşaretle", completeOrder: "Siparişi Tamamla", orderNote: "Sipariş notu", menuItemSaved: "Menü ürünü kaydedildi",
      menuItemDeleted: "Menü ürünü silindi", categoryAdded: "Kategori eklendi", demoReset: "Demo verileri sıfırlandı",
      orderSent: "Sipariş mutfağa gönderildi", addBeforePrint: "Yazdırmadan önce ürün ekleyin", allowPopups: "Yazdırmak için popuplara izin verin",
      currencyChanged: "Para birimi değişti:", languageChanged: "Dil değişti:", orderMarked: "Sipariş işaretlendi:",
      completedHistoryEmpty: "Tamamlanan siparişler burada görünür.", itemTypes: "ürün tipi", printed: "Yazdırıldı", total: "Toplam",
      ordermateTicket: "OrderMate Fişi", remove: "Kaldır", delete: "Sil", edit: "Düzenle", newCategoryName: "Yeni kategori adı"
    },
    categories: { "Starters": "Başlangıçlar", "Main Dishes": "Ana yemekler", "Drinks": "İçecekler", "Desserts": "Tatlılar" },
    foods: {
      "Tomato Bruschetta": "Domatesli bruschetta", "Crispy Calamari": "Çıtır kalamar", "Herb Garlic Bread": "Otlu sarımsaklı ekmek",
      "Grilled Salmon": "Izgara somon", "Truffle Mushroom Pasta": "Trüflü mantarlı makarna", "Charcoal Chicken Plate": "Kömür ateşinde tavuk tabağı",
      "Sparkling Lemonade": "Gazlı limonata", "Iced Mint Tea": "Buzlu nane çayı", "House Espresso": "Ev espressosu",
      "Chocolate Fondant": "Çikolatalı fondan", "Vanilla Panna Cotta": "Vanilyalı panna cotta"
    },
    status: { new: "Yeni", accepted: "Kabul edildi", preparing: "Hazırlanıyor", ready: "Hazır", completed: "Tamamlandı" }
  },
  AL: {
    ui: {
      offline: "Jashtë linje", language: "Gjuha", currencySetting: "Monedha", takeOrder: "Merr Porosi", clear: "Pastro",
      table: "Tavolina", waiter: "Kamarieri", menuItem: "Artikull menuje", currentOrder: "Porosia aktuale", orderNotes: "Shënime porosie",
      sendOrder: "Dërgo në kuzhinë", liveOrders: "Porosi live", refresh: "Rifresko", menuSales: "Menu dhe shitje",
      resetDemo: "Rivendos demo", addMenuItem: "Shto artikull", editMenuItem: "Ndrysho artikull", itemName: "Emri i artikullit",
      category: "Kategoria", price: "Çmimi", available: "Në dispozicion", unavailable: "Jo në dispozicion", saveItem: "Ruaj artikullin",
      cancel: "Anulo", menuItems: "Artikujt e menusë", completedOrders: "Porosi të përfunduara", totalSales: "Shitje totale",
      navTake: "Merr", navOrder: "Porosi", navKitchen: "Kuzhina", navLive: "Live", navAdmin: "Admin", navManage: "Menaxho",
      noItemsAdded: "Ende nuk është shtuar asgjë.", noItemsCategory: "Nuk ka artikuj në këtë kategori.", noItemsAvailable: "Nuk ka artikuj",
      availableNow: "Në dispozicion tani", each: "secila", itemNote: "Shënim artikulli", itemNotePlaceholder: "pa qepë, ekstra pikante",
      orderNotePlaceholder: "Alergji, kohë ose shënim shërbimi", recentStatuses: "Statuset e fundit shfaqen këtu.",
      noKitchenOrders: "Nuk ka porosi aktive në kuzhinë.", acceptOrder: "Prano Porosinë", startPreparing: "Fillo Përgatitjen",
      markReady: "Shëno gati", completeOrder: "Përfundo Porosinë", orderNote: "Shënim porosie", menuItemSaved: "Artikulli u ruajt",
      menuItemDeleted: "Artikulli u fshi", categoryAdded: "Kategoria u shtua", demoReset: "Të dhënat demo u rivendosën",
      orderSent: "Porosia u dërgua në kuzhinë", addBeforePrint: "Shto artikuj para printimit", allowPopups: "Lejo popup për printim",
      currencyChanged: "Monedha u ndryshua në", languageChanged: "Gjuha u ndryshua në", orderMarked: "Porosia u shënua",
      completedHistoryEmpty: "Porositë e përfunduara shfaqen këtu.", itemTypes: "lloje artikujsh", printed: "Printuar", total: "Totali",
      ordermateTicket: "Fatura OrderMate", remove: "Hiq", delete: "Fshi", edit: "Ndrysho", newCategoryName: "Emri i kategorisë së re"
    },
    categories: { "Starters": "Parapjata", "Main Dishes": "Pjata kryesore", "Drinks": "Pije", "Desserts": "Ëmbëlsira" },
    foods: {
      "Tomato Bruschetta": "Brusketë me domate", "Crispy Calamari": "Kallamarë krokantë", "Herb Garlic Bread": "Bukë me hudhër dhe erëza",
      "Grilled Salmon": "Salmon i pjekur", "Truffle Mushroom Pasta": "Pasta me tartuf dhe kërpudha", "Charcoal Chicken Plate": "Pjatë pule në qymyr",
      "Sparkling Lemonade": "Limonadë me gaz", "Iced Mint Tea": "Çaj i ftohtë me mente", "House Espresso": "Espresso e shtëpisë",
      "Chocolate Fondant": "Fondant me çokollatë", "Vanilla Panna Cotta": "Panna cotta me vanilje"
    },
    status: { new: "E re", accepted: "Pranuar", preparing: "Në përgatitje", ready: "Gati", completed: "Përfunduar" }
  }
};

const starterData = {
  categories: ["Starters", "Main Dishes", "Drinks", "Desserts"],
  menu: [
    { id: crypto.randomUUID(), name: "Tomato Bruschetta", category: "Starters", price: 8.5, available: true },
    { id: crypto.randomUUID(), name: "Crispy Calamari", category: "Starters", price: 11, available: true },
    { id: crypto.randomUUID(), name: "Herb Garlic Bread", category: "Starters", price: 6, available: true },
    { id: crypto.randomUUID(), name: "Grilled Salmon", category: "Main Dishes", price: 22.5, available: true },
    { id: crypto.randomUUID(), name: "Truffle Mushroom Pasta", category: "Main Dishes", price: 18.75, available: true },
    { id: crypto.randomUUID(), name: "Charcoal Chicken Plate", category: "Main Dishes", price: 19.5, available: true },
    { id: crypto.randomUUID(), name: "Sparkling Lemonade", category: "Drinks", price: 4.5, available: true },
    { id: crypto.randomUUID(), name: "Iced Mint Tea", category: "Drinks", price: 4, available: true },
    { id: crypto.randomUUID(), name: "House Espresso", category: "Drinks", price: 3.5, available: true },
    { id: crypto.randomUUID(), name: "Chocolate Fondant", category: "Desserts", price: 8.75, available: true },
    { id: crypto.randomUUID(), name: "Vanilla Panna Cotta", category: "Desserts", price: 7.5, available: true },
  ],
};

let categories = loadData(STORAGE_KEYS.categories, starterData.categories);
let menu = loadData(STORAGE_KEYS.menu, starterData.menu);
let orders = loadData(STORAGE_KEYS.orders, []);
let activeCategory = categories[0];
let selectedMenuItemId = "";
let currentOrder = [];
let lastTouchEnd = 0;
let selectedCurrency = localStorage.getItem(STORAGE_KEYS.currency) || "CHF";
let selectedLanguage = localStorage.getItem(STORAGE_KEYS.language) || "EN";

const els = {
  screens: document.querySelectorAll(".screen"),
  navBtns: document.querySelectorAll(".nav-btn"),
  tableSelect: document.querySelector("#table-select"),
  waiterSelect: document.querySelector("#waiter-select"),
  categoryTabs: document.querySelector("#category-tabs"),
  menuItemSelect: document.querySelector("#menu-item-select"),
  menuGrid: document.querySelector("#menu-grid"),
  cartItems: document.querySelector("#cart-items"),
  cartTotal: document.querySelector("#cart-total"),
  printOrderBtn: document.querySelector("#print-order-btn"),
  orderNote: document.querySelector("#order-note"),
  sendOrderBtn: document.querySelector("#send-order-btn"),
  clearOrderBtn: document.querySelector("#clear-order-btn"),
  waiterStatusStrip: document.querySelector("#waiter-status-strip"),
  languageSelect: document.querySelector("#language-select"),
  currencySelect: document.querySelector("#currency-select"),
  kitchenOrders: document.querySelector("#kitchen-orders"),
  refreshKitchenBtn: document.querySelector("#refresh-kitchen-btn"),
  menuForm: document.querySelector("#menu-form"),
  formTitle: document.querySelector("#form-title"),
  itemId: document.querySelector("#item-id"),
  itemName: document.querySelector("#item-name"),
  itemCategory: document.querySelector("#item-category"),
  itemPrice: document.querySelector("#item-price"),
  itemAvailable: document.querySelector("#item-available"),
  addCategoryBtn: document.querySelector("#add-category-btn"),
  cancelEditBtn: document.querySelector("#cancel-edit-btn"),
  adminMenuList: document.querySelector("#admin-menu-list"),
  orderHistory: document.querySelector("#order-history"),
  historyCount: document.querySelector("#history-count"),
  totalSales: document.querySelector("#total-sales"),
  resetDemoBtn: document.querySelector("#reset-demo-btn"),
  toast: document.querySelector("#toast"),
};

function loadData(key, fallback) {
  const stored = localStorage.getItem(key);
  if (!stored) {
    localStorage.setItem(key, JSON.stringify(fallback));
    return structuredClone(fallback);
  }
  try {
    return JSON.parse(stored);
  } catch {
    localStorage.setItem(key, JSON.stringify(fallback));
    return structuredClone(fallback);
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEYS.menu, JSON.stringify(menu));
  localStorage.setItem(STORAGE_KEYS.categories, JSON.stringify(categories));
  localStorage.setItem(STORAGE_KEYS.orders, JSON.stringify(orders));
}

function money(value) {
  const currency = CURRENCY_OPTIONS[selectedCurrency] ? selectedCurrency : "CHF";
  const config = CURRENCY_OPTIONS[currency];
  return new Intl.NumberFormat(config.locale, { style: "currency", currency }).format(value * config.rate);
}

function t(key) {
  if (ACTION_TEXT[selectedLanguage]?.[key]) {
    return ACTION_TEXT[selectedLanguage][key];
  }
  return I18N[selectedLanguage]?.ui[key] || I18N.EN.ui[key] || key;
}

function statusText(status) {
  return I18N[selectedLanguage]?.status[status] || I18N.EN.status[status] || status;
}

function categoryText(category) {
  return I18N[selectedLanguage]?.categories[category] || I18N.EN.categories[category] || category;
}

function foodText(name) {
  return I18N[selectedLanguage]?.foods[name] || I18N.EN.foods[name] || name;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  els.orderNote.placeholder = t("orderNotePlaceholder");
  els.itemName.placeholder = foodText("Truffle Mushroom Pasta");
  Array.from(els.tableSelect.options).forEach((option) => {
    option.textContent = `${t("table")} ${option.value}`;
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.setTimeout(() => els.toast.classList.remove("show"), 2200);
}

function init() {
  els.languageSelect.value = I18N[selectedLanguage] ? selectedLanguage : "EN";
  selectedLanguage = els.languageSelect.value;
  els.currencySelect.value = CURRENCY_OPTIONS[selectedCurrency] ? selectedCurrency : "CHF";
  selectedCurrency = els.currencySelect.value;

  for (let table = 1; table <= 24; table += 1) {
    const option = document.createElement("option");
    option.value = String(table);
    option.textContent = `${t("table")} ${table}`;
    els.tableSelect.append(option);
  }

  bindEvents();
  renderAll();
  window.setInterval(() => renderKitchen(), 5000);
}

function bindEvents() {
  document.addEventListener("gesturestart", preventZoom, { passive: false });
  document.addEventListener("gesturechange", preventZoom, { passive: false });
  document.addEventListener("gestureend", preventZoom, { passive: false });
  document.addEventListener("wheel", preventCtrlWheelZoom, { passive: false });
  document.addEventListener("touchend", preventDoubleTapZoom, { passive: false });

  els.navBtns.forEach((button) => {
    button.addEventListener("click", () => switchScreen(button.dataset.screen));
  });

  els.clearOrderBtn.addEventListener("click", () => {
    currentOrder = [];
    els.orderNote.value = "";
    renderCart();
  });

  els.sendOrderBtn.addEventListener("click", sendOrderToKitchen);
  els.languageSelect.addEventListener("change", updateLanguage);
  els.printOrderBtn.addEventListener("click", printCurrentOrder);
  els.currencySelect.addEventListener("change", updateCurrency);
  els.menuItemSelect.addEventListener("change", (event) => {
    selectedMenuItemId = event.target.value;
    renderMenu();
  });
  els.refreshKitchenBtn.addEventListener("click", renderKitchen);
  els.menuForm.addEventListener("submit", saveMenuItem);
  els.cancelEditBtn.addEventListener("click", resetForm);
  els.addCategoryBtn.addEventListener("click", addCategory);
  els.resetDemoBtn.addEventListener("click", resetDemo);
}

function updateCurrency(event) {
  selectedCurrency = event.target.value;
  localStorage.setItem(STORAGE_KEYS.currency, selectedCurrency);
  renderAll();
  showToast(`${t("currencyChanged")} ${selectedCurrency}`);
}

function updateLanguage(event) {
  selectedLanguage = event.target.value;
  localStorage.setItem(STORAGE_KEYS.language, selectedLanguage);
  renderAll();
  showToast(`${t("languageChanged")} ${selectedLanguage}`);
}

function preventZoom(event) {
  event.preventDefault();
}

function preventCtrlWheelZoom(event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
}

function preventDoubleTapZoom(event) {
  const now = Date.now();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}

function switchScreen(screenId) {
  els.screens.forEach((screen) => screen.classList.toggle("active", screen.id === screenId));
  els.navBtns.forEach((button) => button.classList.toggle("active", button.dataset.screen === screenId));
  renderAll();
}

function renderAll() {
  applyTranslations();
  renderCategories();
  renderMenu();
  renderCart();
  renderKitchen();
  renderAdmin();
  renderWaiterStatus();
}

function renderCategories() {
  els.categoryTabs.innerHTML = "";
  els.itemCategory.innerHTML = "";

  categories.forEach((category) => {
    const tab = document.createElement("button");
    tab.className = `tab-btn ${category === activeCategory ? "active" : ""}`;
    tab.type = "button";
    tab.textContent = categoryText(category);
    tab.addEventListener("click", () => {
      activeCategory = category;
      selectedMenuItemId = "";
      renderCategories();
      renderMenu();
    });
    els.categoryTabs.append(tab);

    const option = document.createElement("option");
    option.value = category;
    option.textContent = categoryText(category);
    els.itemCategory.append(option);
  });
}

function renderMenu() {
  const items = menu.filter((item) => item.category === activeCategory);
  renderMenuItemSelect(items);

  const selectedItem = items.find((item) => item.id === selectedMenuItemId) || items[0];
  els.menuGrid.innerHTML = selectedItem ? "" : `<div class="empty-state">${t("noItemsCategory")}</div>`;

  if (!selectedItem) {
    return;
  }

  [selectedItem].forEach((item) => {
    const card = document.createElement("article");
    card.className = `menu-card ${item.available ? "" : "unavailable"}`;
    card.innerHTML = `
      <div>
        <h3>${escapeHtml(foodText(item.name))}</h3>
        <p class="menu-meta">${item.available ? t("availableNow") : t("unavailable")}</p>
        <p class="menu-price">${money(item.price)}</p>
      </div>
      <button class="primary-btn" type="button" ${item.available ? "" : "disabled"}>${t("add")}</button>
    `;
    card.querySelector("button").addEventListener("click", () => addToOrder(item));
    els.menuGrid.append(card);
  });
}

function renderMenuItemSelect(items) {
  els.menuItemSelect.innerHTML = "";

  if (!items.length) {
    selectedMenuItemId = "";
    const option = document.createElement("option");
    option.value = "";
    option.textContent = t("noItemsAvailable");
    els.menuItemSelect.append(option);
    els.menuItemSelect.disabled = true;
    return;
  }

  if (!items.some((item) => item.id === selectedMenuItemId)) {
    selectedMenuItemId = items[0].id;
  }

  items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = `${foodText(item.name)}${item.available ? "" : ` (${t("unavailable")})`}`;
    els.menuItemSelect.append(option);
  });

  els.menuItemSelect.disabled = false;
  els.menuItemSelect.value = selectedMenuItemId;
}

function addToOrder(item) {
  const existing = currentOrder.find((line) => line.id === item.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    currentOrder.push({ ...item, quantity: 1, note: "" });
  }
  renderCart();
}

function renderCart() {
  if (!currentOrder.length) {
    els.cartItems.className = "cart-items empty-state";
    els.cartItems.textContent = t("noItemsAdded");
    els.cartTotal.textContent = money(0);
    els.sendOrderBtn.disabled = true;
    els.printOrderBtn.disabled = true;
    return;
  }

  els.cartItems.className = "cart-items";
  els.cartItems.innerHTML = "";
  currentOrder.forEach((line) => {
    const row = document.createElement("div");
    row.className = "cart-row";
    row.innerHTML = `
      <div class="item-actions">
        <div>
          <h3>${escapeHtml(foodText(line.name))}</h3>
          <p class="menu-meta">${money(line.price)} ${t("each")}</p>
        </div>
        <button class="remove-btn" type="button">${t("remove")}</button>
      </div>
      <div class="qty-row">
        <button class="qty-btn" type="button" data-change="-1">-</button>
        <strong>${line.quantity}</strong>
        <button class="qty-btn" type="button" data-change="1">+</button>
      </div>
      <label>
        ${t("itemNote")}
        <input type="text" value="${escapeHtml(line.note)}" placeholder="${escapeHtml(t("itemNotePlaceholder"))}">
      </label>
    `;

    row.querySelector(".remove-btn").addEventListener("click", () => {
      currentOrder = currentOrder.filter((item) => item.id !== line.id);
      renderCart();
    });

    row.querySelectorAll(".qty-btn").forEach((button) => {
      button.addEventListener("click", () => changeQuantity(line.id, Number(button.dataset.change)));
    });

    row.querySelector("input").addEventListener("input", (event) => {
      line.note = event.target.value;
    });

    els.cartItems.append(row);
  });

  const total = currentOrder.reduce((sum, line) => sum + line.price * line.quantity, 0);
  els.cartTotal.textContent = money(total);
  els.sendOrderBtn.disabled = false;
  els.printOrderBtn.disabled = false;
}

function printCurrentOrder() {
  if (!currentOrder.length) {
    showToast(t("addBeforePrint"));
    return;
  }

  const total = currentOrder.reduce((sum, line) => sum + line.price * line.quantity, 0);
  const ticketWindow = window.open("", "_blank", "width=420,height=640");

  if (!ticketWindow) {
    showToast(t("allowPopups"));
    return;
  }

  const itemRows = currentOrder.map((line) => `
    <tr>
      <td>${line.quantity}</td>
      <td>
        <strong>${escapeHtml(foodText(line.name))}</strong>
        ${line.note ? `<div class="note">${escapeHtml(line.note)}</div>` : ""}
      </td>
      <td>${money(line.price * line.quantity)}</td>
    </tr>
  `).join("");

  ticketWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Ticket</title>
      <style>
        body {
          margin: 0;
          padding: 18px;
          color: #111;
          font-family: Arial, sans-serif;
          font-size: 14px;
        }

        h1 {
          margin: 0 0 10px;
          font-size: 22px;
        }

        .meta,
        .footer {
          border-top: 1px dashed #999;
          border-bottom: 1px dashed #999;
          padding: 10px 0;
          margin: 10px 0;
        }

        .meta div,
        .total {
          display: flex;
          justify-content: space-between;
          gap: 12px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin: 12px 0;
        }

        th,
        td {
          padding: 8px 0;
          border-bottom: 1px solid #ddd;
          text-align: left;
          vertical-align: top;
        }

        th:last-child,
        td:last-child {
          text-align: right;
        }

        .note {
          margin-top: 4px;
          font-size: 12px;
          font-weight: 700;
        }

        .total {
          font-size: 18px;
          font-weight: 800;
        }

        @media print {
          body {
            padding: 0;
          }
        }
      </style>
    </head>
    <body>
      <h1>${t("ordermateTicket")}</h1>
      <div class="meta">
        <div><strong>${t("table")}</strong><span>${escapeHtml(els.tableSelect.value)}</span></div>
        <div><strong>${t("waiter")}</strong><span>${escapeHtml(els.waiterSelect.value)}</span></div>
        <div><strong>${t("printed")}</strong><span>${new Date().toLocaleString()}</span></div>
      </div>
      <table>
        <thead>
          <tr>
            <th>${t("qty")}</th>
            <th>${t("itemName")}</th>
            <th>${t("total")}</th>
          </tr>
        </thead>
        <tbody>${itemRows}</tbody>
      </table>
      ${els.orderNote.value.trim() ? `<div class="footer"><strong>${t("orderNote")}</strong><br>${escapeHtml(els.orderNote.value.trim())}</div>` : ""}
      <div class="total"><span>${t("total")}</span><span>${money(total)}</span></div>
      <script>
        window.addEventListener("load", () => {
          window.print();
        });
      <\/script>
    </body>
    </html>
  `);

  ticketWindow.document.close();
}

function changeQuantity(itemId, amount) {
  const line = currentOrder.find((item) => item.id === itemId);
  if (!line) return;
  line.quantity += amount;
  if (line.quantity <= 0) {
    currentOrder = currentOrder.filter((item) => item.id !== itemId);
  }
  renderCart();
}

function sendOrderToKitchen() {
  if (!currentOrder.length) return;

  const order = {
    id: crypto.randomUUID(),
    table: els.tableSelect.value,
    waiter: els.waiterSelect.value,
    note: els.orderNote.value.trim(),
    items: currentOrder.map((item) => ({ ...item })),
    status: "new",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  orders.unshift(order);
  currentOrder = [];
  els.orderNote.value = "";
  saveData();
  renderAll();
  switchScreen("kitchen-screen");
  showToast(t("orderSent"));
}

function renderKitchen() {
  const activeOrders = orders.filter((order) => order.status !== "completed");
  els.kitchenOrders.innerHTML = activeOrders.length ? "" : `<div class="empty-state">${t("noKitchenOrders")}</div>`;
  activeOrders.forEach((order) => els.kitchenOrders.append(createOrderCard(order)));
}

function createOrderCard(order) {
  const card = document.createElement("article");
  card.className = "order-card";
  card.dataset.status = order.status === "accepted" ? "new" : order.status;
  card.innerHTML = `
    <div class="order-card-header">
      <div>
        <h3>${t("table")} ${escapeHtml(order.table)}</h3>
        <p class="menu-meta">${escapeHtml(order.waiter)}</p>
      </div>
      <strong>${statusText(order.status)}</strong>
    </div>
    <div class="order-body">
      ${order.items.map((item) => `
        <div class="order-line">
          <strong>x${item.quantity}</strong>
          <div>
            <span>${escapeHtml(foodText(item.name))}</span>
            ${item.note ? `<p class="note">${escapeHtml(item.note)}</p>` : ""}
          </div>
        </div>
      `).join("")}
      ${order.note ? `<p class="note">${t("orderNote")}: ${escapeHtml(order.note)}</p>` : ""}
      <div class="status-actions"></div>
    </div>
  `;

  const actions = card.querySelector(".status-actions");
  getNextAction(order.status).forEach((action) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = action.label;
    button.addEventListener("click", () => updateOrderStatus(order.id, action.status));
    actions.append(button);
  });

  return card;
}

function getNextAction(status) {
  if (status === "new") return [{ label: t("acceptOrder"), status: "accepted" }];
  if (status === "accepted") return [{ label: t("startPreparing"), status: "preparing" }];
  if (status === "preparing") return [{ label: t("markReady"), status: "ready" }];
  if (status === "ready") return [{ label: t("completeOrder"), status: "completed" }];
  return [];
}

function updateOrderStatus(orderId, status) {
  const order = orders.find((entry) => entry.id === orderId);
  if (!order) return;
  order.status = status;
  order.updatedAt = new Date().toISOString();
  saveData();
  renderAll();
  showToast(`${t("orderMarked")} ${statusText(status).toLowerCase()}`);
}

function renderWaiterStatus() {
  const recent = orders.slice(0, 5);
  els.waiterStatusStrip.innerHTML = recent.length ? "" : `<div class="empty-state">${t("recentStatuses")}</div>`;
  recent.forEach((order) => {
    const chip = document.createElement("div");
    chip.className = "status-chip";
    chip.innerHTML = `<span>${t("table")} ${escapeHtml(order.table)}</span><span>${statusText(order.status)}</span>`;
    els.waiterStatusStrip.append(chip);
  });
}

function saveMenuItem(event) {
  event.preventDefault();
  const id = els.itemId.value || crypto.randomUUID();
  const item = {
    id,
    name: els.itemName.value.trim(),
    category: els.itemCategory.value,
    price: Number(els.itemPrice.value),
    available: els.itemAvailable.checked,
  };

  if (!item.name || Number.isNaN(item.price)) return;

  const existingIndex = menu.findIndex((entry) => entry.id === id);
  if (existingIndex >= 0) {
    menu[existingIndex] = item;
  } else {
    menu.push(item);
  }

  activeCategory = item.category;
  saveData();
  resetForm();
  renderAll();
  showToast(t("menuItemSaved"));
}

function renderAdmin() {
  els.adminMenuList.innerHTML = "";
  menu.forEach((item) => {
    const row = document.createElement("div");
    row.className = "admin-item";
    row.innerHTML = `
      <div>
        <h3>${escapeHtml(foodText(item.name))}</h3>
        <p class="menu-meta">${escapeHtml(categoryText(item.category))}</p>
        <p class="availability ${item.available ? "" : "off"}">${item.available ? t("available") : t("unavailable")}</p>
      </div>
      <div class="item-actions">
        <button class="ghost-btn" type="button">${t("edit")}</button>
        <button class="danger-btn" type="button">${t("delete")}</button>
      </div>
    `;
    row.querySelector(".ghost-btn").addEventListener("click", () => editMenuItem(item));
    row.querySelector(".danger-btn").addEventListener("click", () => deleteMenuItem(item.id));
    els.adminMenuList.append(row);
  });

  const completedOrders = orders.filter((order) => order.status === "completed");
  const totalSales = completedOrders.reduce((sum, order) => {
    return sum + order.items.reduce((orderSum, item) => orderSum + item.price * item.quantity, 0);
  }, 0);

  els.historyCount.textContent = completedOrders.length;
  els.totalSales.textContent = money(totalSales);
  els.orderHistory.innerHTML = completedOrders.length ? "" : `<div class="empty-state">${t("completedHistoryEmpty")}</div>`;
  completedOrders.forEach((order) => {
    const total = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const row = document.createElement("div");
    row.className = "history-line";
    row.innerHTML = `
      <div>
        <h3>${t("table")} ${escapeHtml(order.table)}</h3>
        <p class="menu-meta">${new Date(order.updatedAt).toLocaleString()} - ${order.items.length} ${t("itemTypes")}</p>
      </div>
      <strong>${money(total)}</strong>
    `;
    els.orderHistory.append(row);
  });
}

function editMenuItem(item) {
  els.formTitle.textContent = t("editMenuItem");
  els.itemId.value = item.id;
  els.itemName.value = item.name;
  els.itemCategory.value = item.category;
  els.itemPrice.value = item.price;
  els.itemAvailable.checked = item.available;
  switchScreen("admin-screen");
}

function deleteMenuItem(itemId) {
  menu = menu.filter((item) => item.id !== itemId);
  currentOrder = currentOrder.filter((item) => item.id !== itemId);
  saveData();
  renderAll();
  showToast(t("menuItemDeleted"));
}

function resetForm() {
  els.formTitle.textContent = t("addMenuItem");
  els.menuForm.reset();
  els.itemId.value = "";
  els.itemAvailable.checked = true;
}

function addCategory() {
  const category = window.prompt(t("newCategoryName"));
  if (!category) return;
  const cleanCategory = category.trim();
  if (!cleanCategory || categories.includes(cleanCategory)) return;
  categories.push(cleanCategory);
  activeCategory = cleanCategory;
  saveData();
  renderAll();
  showToast(t("categoryAdded"));
}

function resetDemo() {
  categories = structuredClone(starterData.categories);
  menu = structuredClone(starterData.menu);
  orders = [];
  currentOrder = [];
  activeCategory = categories[0];
  saveData();
  resetForm();
  renderAll();
  showToast(t("demoReset"));
}

init();
