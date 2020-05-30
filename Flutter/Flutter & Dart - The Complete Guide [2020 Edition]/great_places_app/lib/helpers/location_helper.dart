const MAPQUEST_API_KEY = 'aKkcteP94KOzNkNIJWmDpynKT26XiQqZ';

class LocationHelper {
  static String generateLocationPreviewImage(
      {double latitude, double longitude}) {
    return 'https://www.mapquestapi.com/staticmap/v5/map?key=$MAPQUEST_API_KEY&center=$latitude,$longitude&locations=$latitude,$longitude&zoom=12&type=hyb&size=600,400@2x';
  }
}
