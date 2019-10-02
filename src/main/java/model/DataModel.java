package model;

public class DataModel {

    private String label;
    private String value;

    public DataModel(String label, String value) {
        this.label = label;
        this.value = value;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "DataModel{" +
                "label='" + label + '\'' +
                ", value='" + value + '\'' +
                '}';
    }
}
