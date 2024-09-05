import Select from "react-select";

type SortField = "name" | "company" | "email";
type SortDirection = "ascending" | "descending";

type ControlsProps = {
  onSortFieldChange: (field: SortField) => void;
  onSortDirectionChange: (direction: SortDirection) => void;
};

const Controls = ({onSortFieldChange, onSortDirectionChange }: ControlsProps) => {
  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select options={fieldOptions} 
        inputId="sort-field" 
        className="input"
        onChange={(option) => {
          if(option) {
            onSortFieldChange(option.value as SortField);
          }
        }}
      />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          onChange={(option) => {
            if (option){
            onSortDirectionChange(option.value as SortDirection);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Controls;
