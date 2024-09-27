import * as cartService from "services/cart";

const CartItem = ({ item, fetchCart }) => {
    console.log(item);

    return (
        <div className="flex">
            <img className="w-28 rounded-md" src={item.image_src} alt="" />
            <div className="flex justify-between mx-4 flex-1">
                <div className="">
                    <div className="text-xl font-playfair text-emerald-700">
                        {item.plant_name}
                    </div>
                    <div className="text-slate-500 flex gap-2">
                        <div className="w-12 text-slate-400">qty: </div>
                        <div>{item.quantity}</div>
                    </div>
                    <div className="text-slate-500 flex gap-2">
                        <div className="w-12 text-slate-400">color:</div>
                        <div>{item.pot_color}</div>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <div className="text-slate-500">
                        ${item.quantity * item.price_per_unit}
                    </div>
                    <button
                        onClick={async () => {
                            await cartService.removeItemFromCart({
                                itemId: item.id,
                            });
                            fetchCart();
                        }}
                        className=" text-sm flex items-center text-slate-400 hover:text-red-800"
                    >
                        <i className="mr-1 fa-regular fa-trash text-base"></i>
                        <div className="">remove</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
