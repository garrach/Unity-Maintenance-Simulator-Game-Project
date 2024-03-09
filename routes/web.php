<?php


use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\paymentPlansController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BasicMaintenanceController;
use App\Http\Controllers\CarAnalyticsController;
use App\Http\Controllers\ConnectedServicesController;
use App\Http\Controllers\ReminderNotificationsController;
use App\Http\Controllers\FullMaintenanceSuiteController;
use App\Http\Controllers\CustomizableMaintenanceSchedulesController;
use App\Http\Controllers\ExclusiveDiscountsController;
use App\Http\Controllers\PriorityCustomerSupportController;
use App\Http\Controllers\AdvancedMaintenanceReportsController;
use App\Http\Controllers\VehicleController;
use App\Http\Controllers\DeviceController;
use App\Http\Controllers\ConnectionController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PaymentPlanController;
use App\Http\Controllers\AssetBundlesController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\ReminderController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\AddonRequestController;
use App\Http\Controllers\WishListController;
use App\Http\Controllers\DBsyncController;
use App\Http\Controllers\CommentsController;
use App\Http\Controllers\ReviewsController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\ApplicationListController;


//static Pages Routes
Route::middleware('web')->group(function(){
    Route::get('/', function () {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    })->name('home');
  
    Route::get('/aboutUs',function(){return Inertia::render('About');})->name('about');
    Route::get('/contact', [ContactController::class, 'index'])->name('contact');
    Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
    Route::get('/preview/devices',[DeviceController::class,'preview'])->name('devices.preview');    
});

//Authenticated Routes
Route::middleware('auth')->group(function () {
    Route::get('/users',[UsersController::class,'index'])->name('users');
    Route::get('/myaccount', [ProfileController::class, 'create'])->name('myaccount');
    Route::get('/userAccount/{id?}', [ProfileController::class, 'show'])->name('userAccount.show');
    Route::get('/userAccount/user/{id?}', [ProfileController::class, 'editUser'])->name('userAccount.edit');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::patch('/role', [ProfileController::class, 'updateRole'])->name('role.update');
    
    Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
    Route::get('/meeting',function(){return Inertia::render('meeting');})->name('meeting.index');
    Route::get('/webPreview/unity',function(){return Inertia::render('preview/Index');});
    Route::get('/unity-refresh',[DBsyncController::class,'index'])->name('unityRefresh');

    
    // Vehicle Routes
    Route::resource('vehicles', VehicleController::class);
    
    // Device Routes
    Route::resource('devices', DeviceController::class);

    // Connection Routes
    Route::resource('connections', ConnectionController::class);
    
    Route::resource('comments', CommentsController::class);

    Route::resource('reviews', ReviewsController::class);
    
    // Services Routes
    Route::resource('reports', ReportController::class);
    Route::resource('whishlist', WishListController::class);
    Route::resource('schedules', ScheduleController::class);
    Route::resource('assetBundles', AssetBundlesController::class);   
    Route::resource('paymentPlans', PaymentPlanController::class);
    Route::resource('services', ServicesController::class);   
    Route::resource('reminders', ReminderController::class);
    Route::post('/paymentPlans/subscription',[PaymentPlanController::class,'subNewPlan'])->name('subscription.store');
    Route::post('/reports/applyforjob', [ReportController::class,'apply'])->name('applyforjob.store');
    Route::post('/reports/addonrequest', [AddonRequestController::class,'requestDevice'])->name('requestDevice.store');
    Route::get('/basic-maintenance', [BasicMaintenanceController::class, 'index'])->name('basic-maintenance');
    Route::get('/car-analytics', [CarAnalyticsController::class, 'index'])->name('car-analytics');
    Route::get('/connected-services', [ConnectedServicesController::class, 'index'])->name('connected-services');
    Route::get('/reminder-notifications', [ReminderNotificationsController::class, 'index'])->name('reminder-notifications');
    Route::get('/full-maintenance-suite', [FullMaintenanceSuiteController::class, 'index'])->name('full-maintenance-suite');
    Route::post('/full-maintenance-suite', [FullMaintenanceSuiteController::class, 'markAsComplete'])->name('markAsComplete');
    Route::get('/customizable-maintenance-schedules', [CustomizableMaintenanceSchedulesController::class, 'index'])->name('customizable-maintenance-schedules');
    Route::get('/exclusive-discounts', [ExclusiveDiscountsController::class, 'index'])->name('exclusive-discounts');
    Route::get('/priority-customer-support', [PriorityCustomerSupportController::class, 'index'])->name('priority-customer-support');
    Route::get('/application-list', [ApplicationListController::class, 'index'])->name('application-list');
   
    Route::get('/advanced-maintenance-reports', [AdvancedMaintenanceReportsController::class, 'index'])->name('advanced-maintenance-reports');
});

require __DIR__.'/auth.php';
