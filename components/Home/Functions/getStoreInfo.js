import { connect } from "../../../dbConfig/dbConfig";
import Store from "../../../models/StoreModel";

async function getStoreInfo() {
  try {
    // Connect to the database
    await connect();

    const stores = await Store.find();
    return stores;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
}

export default getStoreInfo;
