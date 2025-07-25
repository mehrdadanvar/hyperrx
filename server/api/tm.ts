import { useDrugCollection } from "~/utils/useClient";
// let client = use();
async function getDrugs() {
  let client = await useDrugCollection();
  if (!client) {
    return { data: {} };
  } else {
    let database = client.db("med_content");
    let collection = database.collection("current_tms");
    let results = await collection.find({}, { projection: { _id: 1, tm: 1 } }).toArray();
    return results;
  }
}

export default defineEventHandler(async (event) => {
  let result = await getDrugs();
  return { meta: { version: "0.0.1", date: new Date() }, data: result };
});
