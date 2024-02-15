<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\Service;
use App\Models\PaymentPlan;

class CarMaintenanceSeeder extends Seeder
{
    public function run()
    {
        // Car Maintenance Services
        $services = [
            'Basic Maintenance Tracking' => 'Effortlessly track and manage your car maintenance schedule. Receive timely reminders for oil changes, inspections, and more.',
            'Car Analytics' => 'Gain insights into your car\'s performance with detailed analytics. Track fuel efficiency, mileage, and overall health of your vehicle.',
            'Connected Services' => 'Connect with partnered auto repair shops for seamless service appointments. Receive exclusive discounts and priority service.',
            'Reminder Notifications' => 'Stay on top of your car maintenance with email and SMS notifications. Get alerted for upcoming services and never miss a beat.',
            'Full Maintenance Suite' => 'Unlock the full potential of our maintenance suite. Enjoy advanced features, priority support, and exclusive benefits.',
            'Customizable Maintenance Schedules' => 'Tailor your car maintenance schedules to fit your unique needs. Set personalized intervals for services and inspections.',
            'Exclusive Discounts on Partnered Auto Shops' => 'As a premium member, enjoy special discounts when availing services from our partnered auto repair shops.',
            'Priority Customer Support' => 'Experience top-notch customer support with our priority service for any queries or assistance you may need.',
            'Advanced Maintenance Reports' => 'Access detailed reports on your car\'s maintenance history and performance, helping you make informed decisions.',
        ];

        // Plans
        $plans = [
            'Basic Plan' => ['Basic Maintenance Tracking'],
            'Standard Plan' => ['Car Analytics', 'Reminder Notifications', 'Advanced Maintenance Reports', 'Priority Customer Support'],
            'Premium Plan' => ['Car Analytics', 'Connected Services', 'Reminder Notifications', 'Full Maintenance Suite', 'Customizable Maintenance Schedules', 'Exclusive Discounts on Partnered Auto Shops', 'Priority Customer Support', 'Advanced Maintenance Reports'],
        ];

        // Seed Services
        foreach ($services as $name => $description) {
            Service::create([
                'name' => $name,
                'description' => $description,
            ]);
        }

      
        foreach ($plans as $planName => $servicesInPlan) {
           $plan = PaymentPlan::create(['name' => $planName]);
            foreach ($servicesInPlan as $serviceName) {
                $service = Service::where('name', $serviceName)->first();
                $plan->services()->attach($service);
            }
        }
    }
}
