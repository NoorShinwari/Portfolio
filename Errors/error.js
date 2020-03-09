function generateError() {
  try {
    console.log('Before errors');

    // there will be errors
    lalala;
    console.log('after errors');
  } catch (err) {
    // ArrayIndexOutOfBoundsException extends RRuntimeExcetion extends exception
    console.log('Error:', err);
  } finally {
    console.log('Finally');
  }
}
