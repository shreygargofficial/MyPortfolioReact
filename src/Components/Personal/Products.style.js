import { StyleSheet } from "aphrodite";
import media from "../../Utils/media";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

const size = "20px";
export const ProductStyle = StyleSheet.create({
  row: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    flexWrap: "wrap",
    padding: "10px",
    [media.tablet.min]: {
      display: "block",
    },
  },
  card: {
    width: "32.3%",
    border: "1px solid #ccc",
    lineHeight: "1.3em",
    margin: "5px",
    borderRadius: "15px",
    padding: "10px",
    [media.tablet.max]: {
      width: "45%",
    },
    [media.tablet.min]: {
      width: "100%",
    },
  },
  desc: {
    margin: "10px 0",
  },
  imageContainer: {
    width: "100%",
    padding: "10px",
  },
  image: {
    width: "100%",
  },
});
