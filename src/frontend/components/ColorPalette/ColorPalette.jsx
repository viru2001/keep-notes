import { v4 as uuid } from "uuid";
import "./ColorPalette.css";
const colors = [
  {
    id: uuid(),
    colorHexCode: "#ccff90",
  },
  {
    id: uuid(),
    colorHexCode: "#fff475",
  },
  {
    id: uuid(),
    colorHexCode: "#a7ffeb",
  },
  {
    id: uuid(),
    colorHexCode: "#aecbfa",
  },
  {
    id: uuid(),
    colorHexCode: "#d7aefb",
  },
  {
    id: uuid(),
    colorHexCode: "#fdcfe8",
  },
  {
    id: uuid(),
    colorHexCode: "#fff",
  },
];
const ColorPalette = ({ noteDataDispatch }) => {
  return (
    <div className="color-pallete-wrapper d-flex p-absolute box-shadow-md rounded-md">
      {colors.map(color => (
        <button
          key={color.id}
          className="btn-color rounded-full m-2"
          onClick={() => {
            noteDataDispatch({
              type: "SET_COLOR",
              payload: color.colorHexCode,
            });
        
          }}
          style={{ backgroundColor: color.colorHexCode }}
        ></button>
      ))}
    </div>
  );
};
export { ColorPalette };
