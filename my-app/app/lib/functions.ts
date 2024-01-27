import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const incrementToastMessage = () => toast.success("Added to cart !", {
    autoClose: 2000,
    position: 'bottom-center'
});

export const decrementToastMessage = () => toast.warning("Deleted from cart !", {
    autoClose: 2000,
    position: 'bottom-center'
});

export const notifyRemoveAllToast = () => toast.error("All of this product removed !", {
    autoClose: 2000,
    position: 'bottom-center'
});

export const handleDeleteCart = (id: number, name: string, price: number, img: string, 
    stock: number, decrement: () => void, decreaseCartQuantity: (id: number, name: string, price: number,
        img: string, stock: number) => void) => {
    decreaseCartQuantity(id, name, price, img, stock);
    decrement();
};

export const handleAddToCart = (id: number, name: string, price: number, img: string, stock: number,
    increment: () => void, increaseCartQuantity: (id: number, name: string, price: number, img: string, 
        stock: number) => void) => {
    increaseCartQuantity(id, name, price, img, stock);
    increment();
};