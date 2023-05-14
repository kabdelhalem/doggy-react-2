import {DataStore} from "@aws-amplify/datastore";
import {Event, Families, User, Pet} from "./models";

export async function createEvent(
  Num1,
  Num2,
  Description,
  Date,
  Pet,
  familiesID
) {
  await DataStore.save(
    new Event({
      Num1: Num1,
      Num2: Num2,
      Description: Description,
      Date: Date,
      Pet: Pet,
      familiesID: familiesID,
    })
  );
}
export async function getEvents() {
  const models = await DataStore.query(Event);
  return models;
}
export async function updateEvent() {
  /* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
  await DataStore.save(
    Event.copyOf(CURRENT_ITEM, (item) => {
      // Update the values on {item} variable to update DataStore entry
    })
  );
}
export async function deleteEvent() {
  const modelToDelete = await DataStore.query(Event, 123456789);
  DataStore.delete(modelToDelete);
}

export async function createUser() {
  await DataStore.save(
    new User({
      Name: "Lorem ipsum dolor sit amet",
      familiesID: "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
      Email: "Lorem ipsum dolor sit amet",
    })
  );
}
export async function getUsers() {
  const models = await DataStore.query(User);
  console.log(models);
}
export async function updateUser() {
  /* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
  await DataStore.save(
    User.copyOf(CURRENT_ITEM, (item) => {
      // Update the values on {item} variable to update DataStore entry
    })
  );
}
export async function deleteUser() {
  const modelToDelete = await DataStore.query(User, 123456789);
  DataStore.delete(modelToDelete);
}

export async function createPet() {
  await DataStore.save(
    new Pet({
      Name: "Lorem ipsum dolor sit amet",
      familiesID: "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
    })
  );
}
export async function getPets() {
  const models = await DataStore.query(Pet);
  console.log(models);
}
export async function updatePet() {
  /* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
  await DataStore.save(
    Pet.copyOf(CURRENT_ITEM, (item) => {
      // Update the values on {item} variable to update DataStore entry
    })
  );
}
export async function deletePet() {
  const modelToDelete = await DataStore.query(Pet, 123456789);
  DataStore.delete(modelToDelete);
}

export async function createFamily() {
  await DataStore.save(
    new Families({
      Family_Name: "Lorem ipsum dolor sit amet",
      Users: [],
      Pets: [],
      Events: [],
    })
  );
}
export async function getFamilies() {
  const models = await DataStore.query(Families);
  console.log(models);
}
export async function updateFamily() {
  /* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
  await DataStore.save(
    Families.copyOf(CURRENT_ITEM, (item) => {
      // Update the values on {item} variable to update DataStore entry
    })
  );
}
export async function deleteFamily() {
  const modelToDelete = await DataStore.query(Families, 123456789);
  DataStore.delete(modelToDelete);
}
