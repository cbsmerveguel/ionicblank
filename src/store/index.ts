import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      tableData: [
        {
          id: "050000425651",
          material: "UP210",
          status: "In Process"
        },
        {
          id: "050000425652",
          material: "TP101",
          status: "Not Started"
        },
        {
          id: "050000425653",
          material: "TH100",
          status: "In Process"
        },
      ],
    };
  },
  getters: {
    inspections(state) {
      return state.tableData;
    },
    inspection(state) {
      return (inspectionId) => {
          return state.tableData.find(
            (data) => (data.id = inspectionId)
          );
      };
    },
  },
});

export default store;
