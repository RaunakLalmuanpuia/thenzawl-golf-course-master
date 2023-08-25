{{-- Hi {{ $name }}
<p>
  Your booking has been confirmed.
  Please provide the attached QrCode at the time of entry <br>
  {{-- If you wish to cancel your booking, click <a href="">here</a>
</p>. --}}

<!DOCTYPE html>
<html>
<head>
    <title>Booking Confirmation</title>
</head>
<body>
    <p>Hi {{ $name }},</p>

    <p>Your booking has been confirmed.</p>

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

    <p>Please provide the attached QR code at the time of entry:</p>
    {!! $qr !!}

    {{-- If you wish to cancel your booking, click <a href="">here</a>. --}}
</body>
</html>
