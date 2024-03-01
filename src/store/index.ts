import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      tableData: [
        {
          inspectionId: "050000425651",
          material: "UP210",
          status: "In Process",
          image:
            "https://i.postimg.cc/kMQYz82j/PIC-PROD-MAIN-OBLIQUE-UM600.png",
        },
        {
          inspectionId: "050000425652",
          material: "TP101",
          status: "Not Started",
          image:
            "https://i.postimg.cc/kMQYz82j/PIC-PROD-MAIN-OBLIQUE-UM600.png",
        },
        {
          inspectionId: "050000425653",
          material: "TH100",
          status: "In Process",
          image:
            "https://i.postimg.cc/kMQYz82j/PIC-PROD-MAIN-OBLIQUE-UM600.png",
        },
      ],
    };
  },
  getters: {
    tableData(state) {
      return state.tableData;
    },
    inspection(state) {
      return (inspectionId) => {
        if (inspectionId) {
          return state.tableData.find(
            (data) => (data.inspectionId = inspectionId)
          );
        }
      };
    },
  },
});

export default store;
