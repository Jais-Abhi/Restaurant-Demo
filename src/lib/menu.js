export const menuCategories = [
  { id: "starters", label: "To Begin" },
  { id: "mains", label: "From the Tandoor" },
  { id: "curries", label: "Royal Curries" },
  { id: "rice", label: "Rice & Breads" },
  { id: "desserts", label: "Sweet Finish" },
];

export const menuSections = [
  { id: "starters", eyebrow: "TO BEGIN", title: "Small plates, big welcome.", items: [
    { name: "Paneer Tikka", description: "Smoked cottage cheese, royal marinade", price: "₹289", tags: ["Vegetarian"] },
    { name: "Dahi Ke Kebab", description: "Hung curd, cashew, crisp herb crumb", price: "₹269", tags: ["Vegetarian"] },
    { name: "Murg Malai Tikka", description: "Cream-marinated chicken, cardamom", price: "₹329", tags: ["Chef pick"] },
    { name: "Samosa Trio", description: "Classic potato, lamb keema, paneer", price: "₹229", tags: ["To share"] },
  ] },
  { id: "mains", eyebrow: "FROM THE TANDOOR", title: "The fire does the talking.", featured: { name: "Tandoori Jhinga", description: "Tiger prawns, saffron yogurt, charred lemon", price: "₹499", image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=1000&q=85" }, items: [
    { name: "Tandoori Chicken", description: "Half bird, smoked paprika, mint chutney", price: "₹449", tags: ["Signature"] },
    { name: "Murg Seekh Kebab", description: "Minced chicken, green chilli, onion laccha", price: "₹379", tags: ["Chef pick"] },
    { name: "Subz Angare", description: "Seasonal vegetables, black pepper, smoke", price: "₹329", tags: ["Vegetarian"] },
  ] },
  { id: "curries", eyebrow: "ROYAL CURRIES", title: "Slow-cooked, deeply layered.", items: [
    { name: "Butter Chicken", description: "Charred chicken, tomato, fenugreek", price: "₹349", tags: ["Signature"] },
    { name: "Laal Maas", description: "Rajasthani lamb, Mathania chilli, garlic", price: "₹429", tags: ["Spicy"] },
    { name: "Dal Makhani", description: "Black lentils, butter, finished overnight", price: "₹249", tags: ["Vegetarian"] },
    { name: "Paneer Lababdar", description: "Cottage cheese, tomato, kasuri methi", price: "₹299", tags: ["Vegetarian"] },
  ] },
  { id: "rice", eyebrow: "RICE & BREADS", title: "Made for the middle of the table.", items: [
    { name: "Royal Dum Biryani", description: "Slow-cooked basmati, saffron, whole spices", price: "₹329", tags: ["Signature"] },
    { name: "Garlic Naan", description: "Tandoor-baked, garlic butter, coriander", price: "₹99", tags: [] },
    { name: "Saffron Pulao", description: "Basmati, toasted nuts, golden raisins", price: "₹189", tags: ["Vegetarian"] },
  ] },
  { id: "desserts", eyebrow: "SWEET FINISH", title: "Leave room for one more.", items: [
    { name: "Gulab Jamun Brûlée", description: "Warm dumplings, vanilla custard, pistachio", price: "₹199", tags: ["Chef pick"] },
    { name: "Kesar Kulfi", description: "Saffron, cardamom, rose petal", price: "₹169", tags: ["Vegetarian"] },
    { name: "Mango Shrikhand", description: "Alphonso, hung yogurt, toasted almond", price: "₹179", tags: ["Seasonal"] },
  ] },
];

export const chefSpecials = [menuSections[1].featured, { name: "Dum Gosht Biryani", description: "Tender lamb, aged basmati, saffron", price: "₹429", image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=1000&q=85" }];

export const shareableCombos = [
  { name: "The Royal Table", description: "A little of everything for two", price: "₹1,199" },
  { name: "Family Feast", description: "Feeds four, with all the favourites", price: "₹1,899" },
];

export const allergens = "Please let our team know about any allergies or dietary preferences before ordering.";
