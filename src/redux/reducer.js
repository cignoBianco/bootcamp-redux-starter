const initialState = {
    goods: [
        {
            id: 0,
            title: "Logitech C920 Hd Pro Webcam",
            description: "Full HD 1080p video that's faster, smoother and works on more computers. Skype in Full HD 1080p Get breathtaking Full HD 1080p video calls on Skype for the sharpest video-calling experience. Smoother. Sharper. Richer. Clearer. Logitech Fluid Crystal Technology. It's what makes a Logitech webcam better.",
            price: 120
        },
        {
            id: 1,
            title: "Logitech USB Headset H390 with Noise Cancelling Mic",
            description: "Padded headband and ear pads. Frequency response (Microphone): 100 hertz - 10 kilohertz Rotating, noise canceling microphone. Sensitivity (headphone) 94 dBV/Pa +/ 3 dB. Sensitivity (microphone) 17 dBV/Pa +/ 4 dB",
            price: 50
        },
        {
            id: 2,
            title: "Anker PowerCore 10000 Portable Charger",
            description: "One of The Smallest and Lightest 10000mAh Power Bank, Ultra-Compact Battery Pack, High-Speed Charging Technology Phone Charger for iPhone, Samsung and More.",
            price: 150
        }
    ],
    cart: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_GOOD_TO_CART':
            const good = state.goods.find((item) => item.id === action.payload.id);
            const cart = [...state.cart, good];

            return {...state, cart};
        case 'REMOVE_GOOD_FROM_CART':
            // const newCart = [...state.cart].filter((el) => el.id != action.payload.id);

            // return {...state, cart: newCart}

            const cartRem = [...state.cart];
            let goodRemIndex = cartRem.map(item => item.id).indexOf(action.payload.id);

            goodRemIndex >= 0 && cartRem.splice(goodRemIndex, 1);
            return {...state, cart: cartRem}
        default:
            return state;
    }
}

export default reducer;