const CenteredColumnTemplate = require("./src/CenteredColumn.template");
const CenteredRowTemplate = require("./src/CenteredRow.template");
const CheckboxTemplate = require("./src/Checkbox.template");
const CircularSpinnerTemplate = require("./src/CircularSpinner.template");
const ColorPickerTemplate = require("./src/ColorPicker.template");
const ColumnTemplate = require("./src/Column.template");
const DatePickerTemplate = require("./src/DatePicker.template");
const DateTimeLocalPickerTemplate = require("./src/DateTimeLocalPicker.template");
const EmailFieldTemplate = require("./src/EmailField.template");
const FilePickerTemplate = require("./src/FilePicker.template");
const FragmentTemplate = require("./src/Fragment.template");
const HiddenInputTemplate = require("./src/HiddenInput.template");
const HorizontalLineTemplate = require("./src/HorizontalLine.template");
const HtmlContainerTemplate = require("./src/HtmlContainer.template");
const ImagePickerTemplate = require("./src/ImagePicker.template");
const LazyColumnTemplate = require("./src/LazyColumn.template");
const LazyRowTemplate = require("./src/LazyRow.template");
const LinkTemplate = require("./src/Link.template");
const MonthPickerTemplate = require("./src/MonthPicker.template");
const NumberPickerTemplate = require("./src/NumberPicker.template");
const PasswordFieldTemplate = require("./src/PasswordField.template");
const RadioButtonTemplate = require("./src/RadioButton.template");
const RangePickerTemplate = require("./src/RangePicker.template");
const ResetButtonTemplate = require("./src/ResetButton.template");
const RowTemplate = require("./src/Row.template");
const SearchFieldTemplate = require("./src/SearchField.template");
const SpacerTemplate = require("./src/Spacer.template");
const SubmitButtonTemplate = require("./src/SubmitButton.template");
const TelephoneNumberFieldTemplate = require("./src/TelephoneNumberField.template");
const TextFieldTemplate = require("./src/TextField.template");
const TimePickerTemplate = require("./src/TimePicker.template");
const ToggleSwitchTemplate = require("./src/ToggleSwitch.template");
const UrlFieldTemplate = require("./src/UrlField.template");
const VerticalLineTemplate = require("./src/VerticalLine.template");
const WeekPickerTemplate = require("./src/WeekPicker.template");

module.exports = {
    items: {
        HtmlContainer: HtmlContainerTemplate(),
        Fragment: FragmentTemplate(),
        Column: ColumnTemplate(),
        Row: RowTemplate(),
        CenteredColumn: CenteredColumnTemplate(),
        CenteredRow: CenteredRowTemplate(),
        CheckBox: CheckboxTemplate(),
        ColorPicker: ColorPickerTemplate(),
        DatePicker: DatePickerTemplate(),
        DateTimeLocalPicker: DateTimeLocalPickerTemplate(),
        EmailField: EmailFieldTemplate(),
        FilePicker: FilePickerTemplate(),
        HiddenInput: HiddenInputTemplate(),
        ImagePicker: ImagePickerTemplate(),
        MonthPicker: MonthPickerTemplate(),
        NumberPicker: NumberPickerTemplate(),
        PasswordField: PasswordFieldTemplate(),
        RadioButton: RadioButtonTemplate(),
        RangePicker: RangePickerTemplate(),
        ResetButton: ResetButtonTemplate(),
        SearchField: SearchFieldTemplate(),
        SubmitButton: SubmitButtonTemplate(),
        TelephoneNumberField: TelephoneNumberFieldTemplate(),
        TextField: TextFieldTemplate(),
        TimePicker: TimePickerTemplate(),
        UrlField: UrlFieldTemplate(),
        WeekPicker: WeekPickerTemplate(),
        Spacer: SpacerTemplate(),
        LazyColumn: LazyColumnTemplate(),
        LazyRow: LazyRowTemplate(),
        HorizontalLine: HorizontalLineTemplate(),
        VerticalLine: VerticalLineTemplate(),
        Link: LinkTemplate(),
        ToggleSwitch: ToggleSwitchTemplate(),
        CircularSpinner: CircularSpinnerTemplate(),
    },
};
