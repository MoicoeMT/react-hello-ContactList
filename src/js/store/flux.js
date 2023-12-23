const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiUrl: "https://playground.4geeks.com/apis/fake/contact/",
      characters: [],
    },

    actions: {
      getContacts: async () => {
        const store = getStore();
        const response = await fetch(`${store.apiUrl}agenda/MoicoeMT`);
        const data = await response.json();
        setStore({ characters: data });
      },

      deleteProduct: async (id) => {
        const store = getStore();
        const response = await fetch(`${store.apiUrl}${id}`, {
          method: "DELETE",
        });
        getActions().getContacts();
      },

      addContact: async (task) => {
        const store = getStore();
        const response = await fetch(store.apiUrl, {
          method: "POST",
          body: JSON.stringify(task),
          headers: {
            "Content-Type": "application/json",
          },
        });
        getActions().getContacts();
      },

      updateContact: async (contact, id) => {
        const store = getStore();
        const response = await fetch(`${store.apiUrl}${id}`, {
          method: "PUT",
          body: JSON.stringify(contact),
          headers: {
            "Content-Type": "application/json",
          },
        });
        getActions().getContacts();
      },
    },
  };
};

export default getState;
