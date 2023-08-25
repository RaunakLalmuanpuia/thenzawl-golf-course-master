{{-- <!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Test</title>
</head>
<body>
  Please Save This QR Code
  <br>
  {!! $qr !!}
</body>
</html> --}}


<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Test</title>
</head>
<body>
  <p>Order Details:</p>
<ul>
    <li>Name: {{ $orderDetail->name }}</li>
    <li>Order ID: {{ $orderDetail->order_id }}</li>
    <li>Ordered Items:</li>
    <ul>
        @foreach ($orderDetail->orderedItem as $orderedItem)
            <li>{{ $orderedItem->item->name_of_item }} - Quantity: {{ $orderedItem->quantity }}</li>
        @endforeach
    </ul>
</ul>
<br>
<br>
<br>
<br>
<br>
<p>Please provide the attached QR code at the time of entry:</p>
{!! $qr !!}
  Please Save This QR Code
</body>
</html>

