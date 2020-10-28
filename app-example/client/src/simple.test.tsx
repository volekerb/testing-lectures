const REQUIRED_TAGS = ["java", "js", "mobile", "qa"]

const CHARS = ['j', 's'];

REQUIRED_TAGS.forEach(tag => {
    it(`should contain one of ${CHARS} tags`, () => {
        expect(
            CHARS.some(char => tag.indexOf(char) >= 0)
        ).toBeTruthy()
    });
});