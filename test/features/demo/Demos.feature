Feature: Demo Feature

    @demo @smoke
    Scenario Outline: Run First demo feature
        Given Google page is opened
        When Search with <SearchItem>
        Then Click on first search result
        Then The URL should match <ExpectedURL>

        Examples:
            | TestID    | SearchItem | ExpectedURL           |
            | DEMO_TC01 | WDIO       | https://webdriver.io/ |