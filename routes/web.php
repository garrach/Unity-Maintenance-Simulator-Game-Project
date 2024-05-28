<?php
use App\Http\Controllers\AddonRequestController;
use App\Http\Controllers\ApplicationListController;
use App\Http\Controllers\AssetBundlesController;
use App\Http\Controllers\BasicMaintenanceController;
use App\Http\Controllers\CarAnalyticsController;
use App\Http\Controllers\CommentsController;
use App\Http\Controllers\ConnectedServicesController;
use App\Http\Controllers\ConnectionController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CustomizableMaintenanceSchedulesController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DBsyncController;
use App\Http\Controllers\DeviceController;
use App\Http\Controllers\ExclusiveDiscountsController;
use App\Http\Controllers\FullMaintenanceSuiteController;
use App\Http\Controllers\PaymentPlanController;
use App\Http\Controllers\PriorityCustomerSupportController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\ReviewsController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\VehicleController;
use App\Http\Controllers\WishListController;
use App\Http\Controllers\LeaderboardController;
use App\Http\Controllers\UnityDevicesController;
use App\Http\Controllers\UnityDataMonitorController;
use App\Http\Controllers\SubAgentController;
use App\Http\Controllers\RadarController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;
use Inertia\Inertia;


//static Pages Routes
Route::get('/api/key',function(){
    return response()->json(['key'=>env('APP_WEBSOCKET_KEY')]);
});


    Route::get('/', function () {

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'tending'=>base64_encode(json_encode(ConnectionController::getTendingConnections())),
        ]);
    })->name('home');
    Route::get('/aboutUs', function () {return Inertia::render('About');})->name('about');
    Route::get('/contact', [ContactController::class, 'index'])->name('contact');
    Route::get('/contact/list', [ContactController::class, 'list'])->name('contact.list');
    Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
    Route::delete('/contact', [ContactController::class, 'destroy'])->name('contact.delete');
    Route::get('/preview/devices', [DeviceController::class, 'preview'])->name('devices.preview');
    Route::get('/gaming', [UnityDataMonitorController::class, 'previewService'])->name('previewService');
//Authenticated Routes
Route::middleware(('auth'))->group(function () {


    Route::post('/subservices/sub', [SubAgentController::class, 'sub'])->name('subservices.sub');
    Route::get('/subservices/plans', [SubAgentController::class, 'viewPlans'])->name('subservices.viewPlans');

    //client and Admin and Employees


    Route::resource('assetBundles', AssetBundlesController::class);
    Route::get('/leaderboard',[LeaderboardController::class, 'index'])->name('leaderboard');
    Route::get('/data-monitoring',[UnityDataMonitorController::class, 'index'])->name('data-monitoring');

    Route::get('/users', [UsersController::class, 'index'])->name('users');
    Route::get('/myaccount', [ProfileController::class, 'create'])->name('myaccount');
    Route::post('/send-message', [ProfileController::class, 'sendMessage'])->name('send-message');
    Route::delete('/send-message', [ProfileController::class, 'DeleteMessage'])->name('delete.message');
    Route::get('/userAccount/{id?}', [ProfileController::class, 'show'])->name('userAccount.show');
    Route::get('/userAccount/user/{id?}', [ProfileController::class, 'editUser'])->name('userAccount.edit');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::get('/myprogress', [LeaderboardController::class, 'userprogress'])->name('myprogress');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::patch('/role', [ProfileController::class, 'updateRole'])->name('role.update');
    Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

    Route::post('/reports/applyforjob', [ReportController::class, 'apply'])->name('applyforjob.store');
    Route::post('/reports/addonrequest', [AddonRequestController::class, 'requestDevice'])->name('requestDevice.store');
    Route::get('/basic-maintenance', [BasicMaintenanceController::class, 'index'])->name('basic-maintenance');
    Route::get('/car-analytics', [CarAnalyticsController::class, 'index'])->name('car-analytics');
    Route::get('/meeting', function () {return Inertia::render('meeting');})->name('meeting.index');
    Route::get('/webPreview/unity', [UnityDevicesController::class,'index'])->name('unity.index');
    Route::post('/webPreview/unity', [UnityDevicesController::class,'move'])->name('unity.move');
    Route::get('/unity-refresh', [DBsyncController::class, 'index'])->name('unityRefresh');

    Route::middleware(('Admin'))->group(function () {
        Route::resource('vehicles', VehicleController::class);
        Route::resource('devices', DeviceController::class);
        Route::post('/device/update', [DeviceController::class,'updatePic'])->name('device.update');
        Route::delete('/device/delete', [DeviceController::class,'destroyForPan'])->name('device.delete');

        Route::post('/assign-device',[RadarController::class, 'assigntoDevice'])->name('assignToDevice');
        Route::post('/assign-update',[RadarController::class, 'updateAssignToDevice'])->name('assignToDevice.update');

        Route::resource('paymentPlans', PaymentPlanController::class);
        Route::resource('services', ServicesController::class);
        Route::resource('connections', ConnectionController::class);
        Route::resource('schedules', ScheduleController::class);
        Route::resource('reports', ReportController::class);
           Route::resource('whishlist', WishListController::class);
        Route::get('/subservices', [SubAgentController::class, 'index'])->name('subservices.index');
        Route::get('/subservices/{id}/edit', [SubAgentController::class, 'EditSubservice'])->name('subservices.edit');
        Route::put('/subservices/{id}', [SubAgentController::class, 'UpdateSubservice'])->name('subservices.update');
        Route::delete('/subservices/{id}', [SubAgentController::class, 'DeleteSubservice'])->name('subservices.destroy');
        Route::get('/documentation',function(){
            $key=env('APP_WEBSOCKET_KEY');
            return Inertia::render('Documentation',compact('key'));
        })->name('documentation');
    });

    Route::get('/report-purchase-service', [ReportController::class,"PurchaseServiceCheckout"])->name('purchase.checkout');
    Route::post('/report-purchase-service', [ReportController::class,"PurchaseService"])->name('purchase.service');

    //client and Employees
    Route::resource('vehicles', VehicleController::class)->only(['show', 'index']);
    Route::resource('devices', DeviceController::class)->only(['show', 'index']);
    Route::resource('services', ServicesController::class)->only(['show', 'index']);
    Route::resource('connections', ConnectionController::class)->only(['show', 'index']);
    Route::resource('schedules', ScheduleController::class)->only(['show', 'index']);
    Route::resource('comments', CommentsController::class);
    Route::resource('reviews', ReviewsController::class);
    Route::resource('reports', ReportController::class);
    Route::resource('whishlist', WishListController::class);

    //client and Employees
    Route::post('/paymentPlans/subscription', [PaymentPlanController::class, 'subNewPlan'])->name('subscription.store');
    Route::get('/connected-services', [ConnectedServicesController::class, 'index'])->name('connected-services');
    Route::get('/full-maintenance-suite', [FullMaintenanceSuiteController::class, 'index'])->name('full-maintenance-suite');
    Route::post('/full-maintenance-suite', [FullMaintenanceSuiteController::class, 'markAsComplete'])->name('markAsComplete');
    Route::get('/customizable-maintenance-schedules', [CustomizableMaintenanceSchedulesController::class, 'index'])->name('customizable-maintenance-schedules');
    Route::get('/exclusive-discounts', [ExclusiveDiscountsController::class, 'index'])->name('exclusive-discounts');
    Route::get('/priority-customer-support', [PriorityCustomerSupportController::class, 'index'])->name('priority-customer-support');
    Route::get('/application-list', [ApplicationListController::class, 'index'])->name('application-list');
});
require __DIR__ . '/auth.php';
