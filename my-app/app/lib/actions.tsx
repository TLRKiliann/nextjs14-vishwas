"use server";

import { signIn } from '@/auth';
import { 
  actionOrderQuery,
  cartOrderUpdateQuery,
  forgotQuery,
  newMemberQuery,
  queryCartDelete,
  sendMessage,
  shippingQuery,
  paymentQuery,
  resetQuery,
  resetShippingQuery,
  queryToPrepareTable, 
  queryToCopyTable,
  queryConfirmation
} from './db';
import { revalidatePath } from 'next/cache';
import { AuthError } from 'next-auth';

// CRUD mariadb
export async function mysqlServerAction(prevState: {message: string} | undefined, formData: FormData) {
  try {
    const id = formData.get("id");
    const name = formData.get("name");
    const password = formData.get("password");
    const email = formData.get("email");
    const btnName = formData.get("submit");
    if (btnName === "insert") {
      if (id !== null && name !== null && email !== null && password !== null) {
        const result = await newMemberQuery("INSERT INTO users VALUES (?, ?, ?, ?)", [id, name, email, password]);
        if (result) {
          revalidatePath("/register");
          return {message: "You are registered"}
        }
      }
    }
    if (btnName === "update") {      
      if (id !== null && name !== null && email !== null && password !== null) {
        const result = await newMemberQuery("UPDATE users SET id=?, name=?, email=?, password=? WHERE id=?", 
          [id, name, email, password, id]
        );
        if (result) {
          revalidatePath("/register");
          return {message: "Data updated"}
        }
      } else {
        return {message: "No password to update"}
      }
    }
    if (btnName === "delete") {
      if (id !== null) {
        const result = await newMemberQuery("DELETE FROM users WHERE id=?", [id]
        );
        if (result) {
          revalidatePath("/register");
          return {message: "Member deleted by id"}
        }
      }
    }
  }
  catch (error) {
    console.log("Error", error)
    throw error;
  }
}

// query for decks
export async function queryDecksCart(prevState: { message: string } | undefined, formData: FormData) {
  try {
    const id = formData.get("id");
    const name = formData.get("name");
    const price = formData.get("price");
    const count = formData.get("count");
    const stock = formData.get("stock");
    const img = formData.get("img");
    const btnSubmit = formData.get("submit");
    if (btnSubmit === "order") {
      if (id !== null && name !== null && price !== null && count !== null && stock !== null && img !== null) {
        const query = `INSERT INTO cartorder (id, name, price, count, stock, img) VALUES (?, ?, ?, ?, ?, ?)
          ON DUPLICATE KEY UPDATE name = VALUES(name), price = VALUES(price), count = VALUES(count),
          stock = VALUES(stock), img = VALUES(img)`;
        const result = await actionOrderQuery(query, [id, name, price, count, stock, img]);
        if (result) {
          revalidatePath("/products/decks");
          return { message: "Inserted to cart !" };
        }
      }
    }
    if (btnSubmit === "decrease") {
      if (id !== null && name !== null && price !== null && count !== null && stock !== null && img !== null) {
        const result = await cartOrderUpdateQuery("UPDATE cartorder SET id=?, name=?, price=?, count=?, \
          stock=?, img=? WHERE id=?", 
          [id, name, price, count, stock, img, id]);
        if (result) {
          revalidatePath("/products/decks");
          return {message: "Deleted from cart"}
        }
      }
    }
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}

// delete from cartitem
export async function deleteCartItem(prevState: {message: string} | undefined, formData: FormData) {
  try {
    const id = formData.get("id");
    const btnDelete = formData.get("submit");
    if (btnDelete === "deletecartorder") {
      if (id !== null) {
        const result = await queryCartDelete("DELETE FROM cartorder WHERE id=?", [id])
        if (result) {
          revalidatePath("/products/decks");
          return {
            message: "Product deleted"
          }
        }
      }
    }
  } catch (error) {
    console.log(error)
    throw error;
  }
}

// wheels cart query
export async function queryWheelsCart(prevState: {message: string} | undefined, formData: FormData) {
  try {
    const id = formData.get("id");
    const name = formData.get("name");
    const price = formData.get("price");
    const count = formData.get("count");
    const stock = formData.get("stock");
    const img = formData.get("img");
    const btnWheel = formData.get("submit");
    if (btnWheel === "addWheel") {
      if (id !== null && name !== null && price !== null && count !== null && stock !== null && img !== null) {
        const query = `INSERT INTO cartorder (id, name, price, count, stock, img) VALUES (?, ?, ?, ?, ?, ?)
          ON DUPLICATE KEY UPDATE name = VALUES(name), price = VALUES(price), count = VALUES(count),
          stock = VALUES(stock), img = VALUES(img)`;
        const result = await actionOrderQuery(query, [id, name, price, count, stock, img]);
        if (result) {
          revalidatePath("/products/wheels");
          return {message: "Inserted to cart !"}
        }
      }
    }
    if (btnWheel === "deleteWheel") {
      if (id !== null && name !== null && price !== null && count !== null && stock !== null && img !== null) {
        const result = await cartOrderUpdateQuery("UPDATE cartorder SET id=?, name=?, price=?, count=?, \
          stock=?, img=? WHERE id=?", 
          [id, name, price, count, stock, img, id]);
        if (result) {
          revalidatePath("/products/wheels");
          return {message: "Deleted from cart"}
        }
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// delete all items by id
export async function resetById(prevState: {message: string} | undefined, formData: FormData) {
  try {
    const id = formData.get("id");
    const btnDelete = formData.get("submit");
    if (btnDelete === "removeAllById") {
      if (id !== null) {
        const result = await queryCartDelete("DELETE FROM cartorder WHERE id=?", [id])
        if (result) {
          revalidatePath("/products/wheels");
          return {
            message: "Removed from cart"
          }
        }
      }
    }
  } catch (error) {
    console.log(error)
    throw error;
  }
}

// trucks cart query
export async function queryTruckCart(prevState: {message: string} | undefined, formData: FormData) {
  try {
    const id = formData.get("id");
    const name = formData.get("name");
    const price = formData.get("price");
    const count = formData.get("count");
    const stock = formData.get("stock");
    const img = formData.get("img");
    const btnWheel = formData.get("submit");
    if (btnWheel === "addTruck") {
      if (id !== null && name !== null && price !== null && count !== null && stock !== null && img !== null) {
        const query = `INSERT INTO cartorder (id, name, price, count, stock, img) VALUES (?, ?, ?, ?, ?, ?)
          ON DUPLICATE KEY UPDATE name = VALUES(name), price = VALUES(price), count = VALUES(count),
          stock = VALUES(stock), img = VALUES(img)`;
        const result = await actionOrderQuery(query, [id, name, price, count, stock, img]);
        if (result) {
          revalidatePath("/products/trucks");
          return {message: "Inserted to cart !"}
        }
      }
    }
    if (btnWheel === "deleteTruck") {
      if (id !== null && name !== null && price !== null && count !== null && stock !== null && img !== null) {
        const result = await cartOrderUpdateQuery("UPDATE cartorder SET id=?, name=?, price=?, count=?, \
          stock=?, img=? WHERE id=?", 
          [id, name, price, count, stock, img, id]);
        if (result) {
          revalidatePath("/products/trucks");
          return {message: "Deleted from cart"}
        }
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// delete all items from order
export async function deleteOrder(prevState: {message: string} | undefined, formData: FormData) {
  try {
    const id = formData.get("id");
    const btnDelete = formData.get("submit");
    if (btnDelete === "deleteorder") {
      if (id !== null) {
        const result = await queryCartDelete("DELETE FROM cartorder WHERE id=?", [id])
        if (result) {
          revalidatePath("/order");
          return {
            message: "Product deleted"
          }
        }
      }
    }
  } catch (error) {
    console.log(error)
    throw error;
  }
}

// shipping from order
export async function shippingRequest(prevState: {message: string} | undefined, formData: FormData) {
  try {
    const email = formData.get("email");
    const user = formData.get("user");
    const address = formData.get("address");
    const npa = formData.get("npa");
    const phone = formData.get("phone");
    const passwd = formData.get("passwd");
    const filterTotal = formData.get("filterTotal");
    const btnShipping = formData.get("submit");
    if (btnShipping === "shipping") {
      if (email !== null && user !== null && address !== null && npa !== null && phone !== null && 
        passwd !== null && filterTotal !== null) {
        const resetShipping = await resetShippingQuery("TRUNCATE TABLE shipping");
        if (resetShipping) {
          const request = await shippingQuery("INSERT INTO shipping VALUES (?, ?, ?, ?, ?, ?, ?)",
            [email, user, address, npa, phone, passwd, filterTotal]);
          if (request) {
            const prepareCopy = await queryToPrepareTable("TRUNCATE TABLE checkout_paid");
            if (prepareCopy) {
              const copyTable = await queryToCopyTable("INSERT INTO checkout_paid SELECT * FROM cartorder", []);
              if (copyTable) {
                const eraseTable = await resetQuery("TRUNCATE TABLE cartorder");
                if (eraseTable) {
                  revalidatePath("/order");
                  return {message: "Shipping done !"};
                }
              }
            }
          }
        }
      }
    }
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}

// payment from order
export async function paymentRequest(prevState: {message: string} | undefined, formData: FormData) {
  try {
    const user = formData.get("user");
    const date = formData.get("date");
    const securitycode = formData.get("securitycode");
    const checkcard = formData.get("checkcard");
    const filterTotal = formData.get("filterTotal");
    const btnPayment = formData.get("submit");
    if (btnPayment === "payment") {
      if (user !== null && date !== null && securitycode !== null && filterTotal !== null) {
        const request = await paymentQuery("INSERT INTO payment VALUES (?, ?, ?, ?, ?)",
          [user, date, securitycode, checkcard, filterTotal]);
        if (request) {
          const prepareCopy = await queryToPrepareTable("TRUNCATE TABLE checkout_paid");
          if (prepareCopy) {
            const copyTable = await queryToCopyTable("INSERT INTO checkout_paid SELECT * FROM cartorder", []);
            if (copyTable) {
              const eraseTable = await resetQuery("TRUNCATE TABLE cartorder");
              if (eraseTable) {
                revalidatePath("/order");
                return {message: "Shipping done !"};
              }
            }
          }
        }
      }
    }
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}

export async function confirmationPayment(prevState: {message: string} | undefined, formData: FormData) {
  try {
    const id = formData.get("id");
    const user = formData.get("user");
    const address = formData.get("address");
    const npa = formData.get("npa");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const name = formData.get("name");
    const price = formData.get("price");
    const count = formData.get("count");
    const img = formData.get("img");
    const filterTotal = formData.get("filterTotal");
    const btnConfirm = formData.get("submit");
    if (btnConfirm === "btnConfirmation") {
      if (id !== null && user !== null && address !== null && npa !== null && phone !== null && email !== null && 
          name !== null && price !== null && count !== null && img !== null && filterTotal !== null) {
        const query = await queryConfirmation("INSERT INTO confirmation SELECT * FROM checkout_paid CROSS JOIN \
          shipping", []);
        if (query) {
          const resetTableCheckout = await resetQuery("TRUNCATE TABLE checkout_paid");
          if (resetTableCheckout) {
            const resetTableShipping = await resetQuery("TRUNCATE TABLE shipping");
            if (resetTableShipping) {
              revalidatePath("/order/checkorder");
              return {message: "Payment done !"}
            }
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// message to send from contact
export async function messageToSend(prevState: {message: string} | undefined, formData: FormData) {
  try {
    const username = formData.get("username");
    const email = formData.get("email");
    const tetxtarea = formData.get("tetxtarea");
    const btnEmail = formData.get("submit");
    if (btnEmail === "sendmessage") {
      if (username !== null && email !== null && tetxtarea !== null) {
        const result = await sendMessage("INSERT INTO messagebox VALUES (?, ?, ?)", [username, email, tetxtarea]);
        if (result) {
          revalidatePath("/contact");
          return {message: "Message was sent successfully !"}
        }
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// email to retrieve password
export async function forgotPasswordServerAction(prevState: {message: string} | undefined, formData: FormData) {
  try {
    const email = formData.get("email");
    const btnForgotPassword = formData.get("submit");
    if (btnForgotPassword === "btnForgotPassword") {
      if (email !== null) {
        const result = await forgotQuery("INSERT INTO forgotpassword VALUES (?)", [email]);
        if (result) {
          revalidatePath("/register");
          return {message: "A message will be send to you soon"};
        }
      }
    }
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}