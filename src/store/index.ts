import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      tableData: [
        {
          id: "111",
          material: "Material1",
          status: "In Process"
        },
        {
          id: "222",
          material: "Material2",
          status: "Not Started"
        },
        {
          id: "333",
          material: "Material3",
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
