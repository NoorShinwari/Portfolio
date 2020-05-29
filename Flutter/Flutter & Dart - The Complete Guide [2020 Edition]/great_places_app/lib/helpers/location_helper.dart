const MAPQUEST_API_KEY = 'aKkcteP94KOzNkNIJWmDpynKT26XiQqZ';

class locationHelper {
  static String generateLocationPreviewImage(
      {double latitude, double longitude}) {
    return 'https://www.mapquestapi.com/staticmap/v5/map?key=$MAPQUEST_API_KEY&center=$latitude,$longitude&zoom=10&type=hyb&size=600,400@2x';
  }
}
