module.exports = {
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
};
