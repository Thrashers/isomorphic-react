import { mapStateToProps, QuestionDetailDisplay } from "../QuestionDetail";
import renderer from "react-test-renderer";
import React from "react";

describe(`The Question Detail Component`, () => {
  describe("The Container Element", () => {
    describe("mapStateToProps", () => {
      it("should map the state to props correctly", () => {
        const sampleQuestion = {
          question_id: 42,
          body: "Some random sentence",
        };
        const appState = {
          questions: [sampleQuestion],
        };
        const ownProps = { question_id: 42 };
        const componentState = mapStateToProps(appState, ownProps);
        console.log(componentState);
        expect(componentState).toEqual(sampleQuestion);
        // TODO: Look into this for react hooks version of redux.
      });
    });
  });

  describe("The Display Element", () => {
    it("should not regress", () => {});
  });

  it(`Should not regress`, () => {
    const tree = renderer.create(
      <QuestionDetailDisplay
        title="THANKS"
        body="42"
        answer_count={0}
        tags={["hitchhiking"]}
      />
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
