package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import model.DataModel;
import org.testng.Assert;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class MyStepdefs {

    private Map<String, DataModel> valuesList;
    private Map<String, DataModel> total;
    private Map<String, DataModel> allRows;

    @Given("^Table with labels and values$")
    public Map<String, DataModel> tableWithLabelsAndValues(List<DataModel> labels) throws Throwable {
        valuesList = new HashMap<>();
        total = new HashMap<>();
        allRows = new HashMap<>();
        for (DataModel label : labels) {
            String key = label.getLabel();
            if (key.contains("Value")) {
                valuesList.put(key, label);
            } else if (key.contains("Total")) {
                total.put(key, label);
            }
            allRows.put(key, label);
        }
        return valuesList;
    }

    @Then("^I verify that the right count of values appear on the screen$")
    public void iVerifyThatTheRightCountOfValuesAppearOnTheScreen() {
        List<String> labels = valuesList.values().stream().map(DataModel::getLabel).sorted().collect(Collectors.toList());
        System.out.println("Count of values on the screen: " + labels);

        List<String> rightCount = new ArrayList<>();
        for (int i = 1; i <= labels.size(); i++) {
            String valueToCompare = "Value " + i;
            rightCount.add(valueToCompare);
        }
        System.out.println("Expected count of values: " + rightCount);

        Assert.assertEquals(labels, rightCount, "Count of values on the screen is not right");
    }

    @Then("^I verify that the values on the screen are greater than (\\d+)$")
    public void iVerifyThatTheValuesOnTheScreenAreGreaterThan(int zero) {
        List<String> listOfString = valuesList.values().stream().map(value -> value.getValue().replace("$", "")
                .replace(",", "")).collect(Collectors.toList());
        System.out.println(listOfString);
        for (String amount : listOfString) {
            Double amountAsDouble = Double.parseDouble(amount);
            if (amountAsDouble < zero) {
                Assert.fail(amountAsDouble + " is less than zero");
            } else {
                System.out.println(amountAsDouble + " is more than zero");
            }
        }
    }

    @Then("^I verify that the total balance is correct based on the values listed on the screen$")
    public void iVerifyThatTheTotalBalanceIsCorrectBasedOnTheValuesListedOnTheScreen() {
        double sum = 0;
        double totalAmount = total.values().stream().map(value -> Double.parseDouble(value.getValue().replace("$", "")
                .replace(",", ""))).collect(Collectors.toList()).get(0);
        System.out.println(totalAmount);

        List<Double> values = valuesList.values().stream().map(value -> Double.parseDouble(value.getValue().replace("$", "")
                .replace(",", ""))).collect(Collectors.toList());
        for (Double value : values) {
            sum = sum + value;
        }

        Assert.assertEquals(sum, totalAmount, "Summary of all values ($" + sum + ") doesn't match with expected Total Balance.");
    }

    @Then("^I verify that the values are formatted as currencies$")
    public void iVerifyThatTheValuesAreFormattedAsCurrencies() {
        System.out.println(allRows);
        Assert.assertTrue(allRows.values().stream().allMatch(value -> value.getValue().contains("$")), "Not all values formatted as currencies");
    }
}
